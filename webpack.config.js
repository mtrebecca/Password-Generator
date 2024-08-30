const path = require('path');

module.exports = {
    mode: 'development', // Ou 'production' para produção
    entry: './src/js/script.js', // Caminho para seu arquivo JavaScript de entrada
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Cria um <style> tag para os CSS
                    'css-loader',   // Processa os CSS imports
                    'sass-loader',  // Compila o SASS para CSS
                ],
            },
        ],
    },
};
