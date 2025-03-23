const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');
const chokidar = require('chokidar');

// Configuración de marked para usar GitHub Flavored Markdown
marked.setOptions({
    gfm: true,
    breaks: true
});

// Función para convertir Markdown a HTML
async function convertMarkdownToHtml(markdownFile, templateFile, outputFile) {
    try {
        // Leer el contenido Markdown
        const markdownContent = await fs.readFile(markdownFile, 'utf-8');
        
        // Procesar front-matter
        const { attributes, body } = frontMatter(markdownContent);
        
        // Convertir Markdown a HTML
        const htmlContent = marked(body);
        
        // Leer la plantilla
        const template = await fs.readFile(templateFile, 'utf-8');
        
        // Reemplazar el contenido en la plantilla
        const finalHtml = template
            .replace('{{title}}', attributes.title || '')
            .replace('{{date}}', attributes.date || '')
            .replace('{{description}}', attributes.description || '')
            .replace('{{content}}', htmlContent);
        
        // Asegurarse de que el directorio de salida existe
        await fs.ensureDir(path.dirname(outputFile));
        
        // Guardar el HTML final
        await fs.writeFile(outputFile, finalHtml, 'utf-8');
        
        console.log(`Generado: ${outputFile}`);
    } catch (error) {
        console.error(`Error procesando ${markdownFile}:`, error);
    }
}

// Función para procesar el index.html
async function processIndexHtml() {
    try {
        const indexFile = path.join('content', 'index.html');
        const outputFile = path.join('public', 'index.html');
        
        // Leer el contenido del index.html
        const indexContent = await fs.readFile(indexFile, 'utf-8');
        
        // Asegurarse de que el directorio public existe
        await fs.ensureDir('public');
        
        // Copiar el index.html directamente
        await fs.writeFile(outputFile, indexContent, 'utf-8');
        
        console.log('Index.html copiado a public');
    } catch (error) {
        console.error('Error procesando index.html:', error);
    }
}

// Función principal de construcción
async function buildSite() {
    console.log('Iniciando construcción del sitio...');
    
    try {
        // Crear directorio public si no existe
        await fs.ensureDir('public');
        
        // Copiar archivos estáticos
        await fs.copy('src', 'public', { overwrite: true });
        console.log('Archivos estáticos copiados');
        
        // Procesar el index.html
        await processIndexHtml();
        
        // Procesar páginas
        const pagesDir = path.join('content', 'pages');
        if (await fs.pathExists(pagesDir)) {
            const pages = await fs.readdir(pagesDir);
            for (const page of pages) {
                if (page.endsWith('.md')) {
                    const inputFile = path.join(pagesDir, page);
                    const outputFile = path.join('public', page.replace('.md', '.html'));
                    await convertMarkdownToHtml(inputFile, 'src/template.html', outputFile);
                }
            }
        }
        
        // Procesar posts del blog
        const blogDir = path.join('content', 'blog');
        if (await fs.pathExists(blogDir)) {
            const posts = await fs.readdir(blogDir);
            for (const post of posts) {
                if (post.endsWith('.md')) {
                    const inputFile = path.join(blogDir, post);
                    const outputFile = path.join('public', 'blog', post.replace('.md', '.html'));
                    await convertMarkdownToHtml(inputFile, 'src/template.html', outputFile);
                }
            }
        }
        
        console.log('¡Construcción completada!');
    } catch (error) {
        console.error('Error durante la construcción:', error);
    }
}

// Función para observar cambios
function watchFiles() {
    console.log('Observando cambios en archivos...');
    
    const watcher = chokidar.watch(['content/**/*.md', 'content/index.html'], {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    
    watcher
        .on('change', path => {
            console.log(`Cambio detectado en ${path}`);
            buildSite();
        })
        .on('error', error => console.error('Error:', error));
}

// Ejecutar el script
if (process.argv.includes('--watch')) {
    watchFiles();
} else {
    buildSite();
} 