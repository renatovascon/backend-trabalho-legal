export const templateBody = (textInput) => {
    const { nome, end, cidade, cep, valor, cpfCnpj } = textInput;

    return `<!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Fatura de Cobrança</title>
       <style>
           body {
               font-family: Arial, sans-serif;
           }
           .container {
               max-width: 800px;
               margin: 0 auto;
               padding: 20px;
           }
           .header {
               text-align: center;
               margin-bottom: 20px;
           }
           .logo {
               max-width: 150px;
           }
           .invoice-info {
               text-align: right;
               margin-bottom: 20px;
           }
           table {
               width: 100%;
               border-collapse: collapse;
           }
           th, td {
               border: 1px solid #ccc;
               padding: 10px;
               text-align: left;
           }
           .total {
               text-align: right;
           }
       </style>
   </head>
   <body>
       <div class="container">
           <div class="header">
               <img src="linux.svg" alt="Logo da Sua Empresa" class="logo">
               <h1>Fatura de Cobrança</h1>
           </div>
           <div class="invoice-info">
               <p>Data da Fatura: 02 de outubro de 2023</p>
               <p>Número da Fatura: 123456</p>
           </div>
           <div class="customer-info">
               <h2>Informações do Cliente</h2>
               <p>Nome do Cliente: ${nome}</p>
               <p>Endereço: ${end},</p>
               <p>Cidade: ${cidade}</p>
               <p>CEP: ${cep}</p>
               <p>CNPJ: ${cpfCnpj}</p>
           </div>
           <table>
               <thead>
                   <tr>
                       <th>Descrição do Item</th>
                       <th>Quantidade</th>
                       <th>Preço Unitário (R$)</th>
                       <th>Total ${valor} (R$)</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Produto 1</td>
                       <td>2</td>
                       <td>50.00</td>
                       <td>100.00</td>
                   </tr>
                   <tr>
                       <td>Produto 2</td>
                       <td>3</td>
                       <td>30.00</td>
                       <td>90.00</td>
                   </tr>
               </tbody>
           </table>
           <div class="total">
               <p>Total a Pagar: R$ 190.00</p>
           </div>
       </div>
   </body>
   </html>`;
}