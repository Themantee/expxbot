// let container = document.getElementById ('result')
// const urls = 'https://randomuser.me/api/?results=100';
// let results = ''
// fetch(urls)
// .then(response => response.json())
// .then(data => {
//     for (let i =0; i < data.results.length; i++) {
//         console.log( data.results[i]);

//         results += 
//         `<tbody>
//         <td>${data.results[i].id.value}</td> 
       
//         <td>${data.results[i].name.first} ${data.results[i].name.last}</td>
        
//         <td><img src="  ${data.results[i].picture.medium}   " alt="img"></td>
        
//         <td>${data.results[i].location.city}</td>
//         <td>${data.results[i].dob.date}</td>
//         <td>${data.results[i].email}</td>
//         <td>${data.results[i].phone}</td>
//         <td>${data.results[i].login.password}</td>
//         <br>
//         </tbody>
//         `
//     }
//     container.innerHTML = results

    

// })





// const url = 'https://api.dexscreener.com/latest/dex/search?q=WBNB%20USDC';

// function getQuote() {
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             // You can add code here to display the data on your webpage
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// Call the function to execute it
//getQuote();



// console.log(api);

// const ulr = ' 	https://api.coindesk.com/v1/bpi/currentprice.json';
//  function getQuote() {
//    fetch(ulr)
//     .then(response => response.json())
//    .then(data => {
//    console.log(data);}) }

//    getQuote();



 


//    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//    function getQuote() {
//        fetch(url)
//            .then(response => {
//                if (!response.ok) {
//                    throw new Error('Network response was not ok');
//                }
//                return response.json();
//            })
//            .then(data => {
//                console.log(data);
//                // You can further process the data here
//                const bitcoinPriceUSD = data.bpi.USD.rate_float;
//                console.log(`Current Bitcoin Price in USD: $${bitcoinPriceUSD}`);
//            })
//            .catch(error => {
//                console.error('Error fetching data:', error);
//            });
//    }
   
//    getQuote();







// let container = document.getElementById ('result')
// const urls = ' https://api.dexscreener.com/latest/dex/search?q=WBNB%20USDC';
// let results = ''
// fetch(urls)
// .then(response => response.json())
// .then(data => {
//     for (let i =0; i < data.results.length; i++) {
//         console.log( data.results[i]);

//         results += 
//         `<tbody>
//         <td>${data.results[i].basetoken}</td> 
       
//         <td>${data.results[i].chainid} </td>
    
//         </tbody>
//         `
//     }
//     container.innerHTML = results

    

// })


// let container = document.getElementById ('result')
// const urls = 'https://randomuser.me/api/?results=100';
// let results = ''
// fetch(urls)
// .then(response => response.json())
// .then(data => {
//     for (let i =0; i < data.results.length; i++) {
//         console.log( data.results[i]);

//         results += 
//         `<tbody>
//         <td>${data.results[i].id.value}</td> 
       
//         <td>${data.results[i].name.first} ${data.results[i].name.last}</td>
        
//         <td><img src="  ${data.results[i].picture.medium}   " alt="img"></td>
        
//         <td>${data.results[i].location.city}</td>
//         <td>${data.results[i].dob.date}</td>
//         <td>${data.results[i].email}</td>
//         <td>${data.results[i].phone}</td>
//         <td>${data.results[i].login.password}</td>
//         <br>
//         </tbody>
//         `
//     }
//     container.innerHTML = results

    

// })



// let container = document.getElementById('result');
// const url = 'https://api.coinpaprika.com/v1/tickers';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let results = '';

//         for (let i = 0; i < data.pairs.length; i++) {
//             results += `
//             <tr>
//                 <td>${data.pairs[i].baseToken.name} (${data.pairs[i].baseToken.symbol})</td>
//                 <td>${data.pairs[i].quoteToken.name} (${data.pairs[i].quoteToken.symbol})</td>
//                 <td>${data.pairs[i].priceUsd}</td>
//                 <td>${data.pairs[i].volume.h24}</td>
//                 <td>${data.pairs[i].liquidity.usd}</td>
//                 <td style="color: ${data.pairs[i].priceChange.h24 > 0 ? 'green' : 'red'};">${data.pairs[i].priceChange.h24}%</td>
//                 <td>${data.pairs[i].txns.h24.buys} Buys / ${data.pairs[i].txns.h24.sells} Sells</td>
//             </tr>`;
//         }

//         container.innerHTML = results;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



// let container = document.getElementById('result');
// const url = 'https://api.coinlore.net/api/tickers/';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let results = '';

//         for (let i = 0; i < data.data.length; i++) {
//             results += `
//             <tr>
                
//                 <td>${data.data[i].name} (${data.data[i].symbol})</td>
//                 <td>${data.data[i].csupply} (${data.data[i].symbol})</td>
//                 <td>${data.data[i].price_usd}</td>
//                 <td>${data.data[i].volume24}</td>
//                 <td>${data.data[i].market_cap_usd}</td>

                
//                 <td style="color: ${data.data[i].
//                     percent_change_1h
//                      > 0 ? 'green' : 'red'};">${data.data[i].
//                         percent_change_1h
//                         }%</td>



//                 <td style="color: ${data.data[i].percent_change_24h > 0 ? 'green' : 'red'};">${data.data[i].percent_change_24h}%</td>




//                 <td>${data.data[i].rank}</td>
//             </tr>`;
//         }

//         container.innerHTML = results;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });




    // const container = document.getElementById('result');
    // const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         let results = '';

    //         for (let i = 0; i < data.length; i++) {
    //             results += `
    //             <tr>
    //                 <td>${data[i].name} (${data[i].symbol})</td>
    //                 <td>USD</td>
    //                 <td>${data[i].quotes.USD.price.toFixed(2)}</td>
    //                 <td>${data[i].quotes.USD.volume_24h.toFixed(2)}</td>
    //                 <td>${data[i].quotes.USD.market_cap.toFixed(2)}</td>
    //                 <td style="color: ${data[i].quotes.USD.percent_change_24h > 0 ? 'green' : 'red'};">
    //                     ${data[i].quotes.USD.percent_change_24h.toFixed(2)}%
    //                 </td>
    //                 <td>${data[i].quotes.USD.volume_24h_change_24h.toFixed(2)} Buys / ${data[i].quotes.USD.volume_24h_change_24h.toFixed(2)} Sells</td>
    //             </tr>`;
    //         }

    //         container.innerHTML = results;
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });