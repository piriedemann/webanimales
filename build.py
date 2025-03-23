#!/usr/bin/env python3
import os
import markdown
import frontmatter
from pathlib import Path
import shutil
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import sys

def convert_markdown_to_html(markdown_file, template_file, output_file):
    # Leer el contenido Markdown con front-matter
    with open(markdown_file, 'r', encoding='utf-8') as f:
        post = frontmatter.load(f)
    
    # Convertir Markdown a HTML
    html_content = markdown.markdown(post.content)
    
    # Cargar la plantilla
    env = Environment(loader=FileSystemLoader('src'))
    template = env.get_template('template.html')
    
    # Preparar los datos para la plantilla
    data = {
        'content': html_content,
        'title': post.get('title', ''),
        'date': post.get('date', ''),
        'description': post.get('description', ''),
        'tags': post.get('tags', [])
    }
    
    # Renderizar la plantilla
    final_html = template.render(**data)
    
    # Asegurarse de que el directorio de salida existe
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Guardar el HTML final
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_html)

def build_site():
    print("Iniciando construcción del sitio...")
    
    # Crear directorio public si no existe
    os.makedirs('public', exist_ok=True)
    
    # Copiar archivos estáticos
    print("Copiando archivos estáticos...")
    shutil.copytree('src', 'public', dirs_exist_ok=True)
    
    # Convertir páginas Markdown
    print("Procesando páginas...")
    pages_dir = Path('content/pages')
    if pages_dir.exists():
        for page in pages_dir.glob('*.md'):
            print(f"Procesando página: {page.name}")
            output_file = f'public/{page.stem}.html'
            convert_markdown_to_html(page, 'src/template.html', output_file)
    
    # Convertir posts del blog
    print("Procesando posts del blog...")
    blog_dir = Path('content/blog')
    if blog_dir.exists():
        for post in blog_dir.glob('*.md'):
            print(f"Procesando post: {post.name}")
            output_file = f'public/blog/{post.stem}.html'
            convert_markdown_to_html(post, 'src/template.html', output_file)
    
    print("¡Construcción completada!")

class ChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith('.md'):
            print(f"Cambio detectado en {event.src_path}")
            build_site()

def watch_for_changes():
    event_handler = ChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path='content', recursive=True)
    observer.start()
    print("Observando cambios en archivos Markdown...")
    try:
        while True:
            pass
    except KeyboardInterrupt:
        observer.stop()
        print("\nDeteniendo el observador...")
    observer.join()

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--watch':
        watch_for_changes()
    else:
        build_site() 