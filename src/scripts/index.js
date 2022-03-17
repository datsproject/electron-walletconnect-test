import '../styles/index.scss';

console.log('webpack starterkit');


/*

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const connectButton = document.querySelector('#connect');
const signButton = document.querySelector('#signData');

// Create a connector
const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
});

connectButton.addEventListener('click', () => {
    connector.connected = false;

    // Check if connection is already established
    if (!connector.connected) {
        // create new session
        connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
        if (error) {
            throw error;
        }
        console.log("payload:", payload);
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
    });

    connector.on("session_update", (error, payload) => {
        if (error) {
            throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
    });

    connector.on("disconnect", (error, payload) => {
        if (error) {
            throw error;
        }

        // Delete connector
    });
});

signButton.addEventListener('click', () => {
    // Draft Message Parameters
    const typedData = {
        types: {
            EIP712Domain: [
                { name: "name", type: "string" },
                { name: "version", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "verifyingContract", type: "address" },
            ],
            Person: [
                { name: "name", type: "string" },
                { name: "account", type: "address" },
            ],
            Mail: [
                { name: "from", type: "Person" },
                { name: "to", type: "Person" },
                { name: "contents", type: "string" },
            ],
        },
        primaryType: "Mail",
        domain: {
            name: "Example Dapp",
            version: "1.0",
            chainId: 1,
            verifyingContract: "juno1epkxqxtmrrt4thkesfljka4rqf4vcckltmpa6teqg3rl9cf48c6sc0lzgv",
        },
        message: {
            from: {
                name: "Alice",
                account: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            },
            to: {
                name: "Bob",
                account: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            },
            contents: "Hey, Bob!",
        },
    };

    const msgParams = [
        "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3", // Required
        typedData, // Required
    ];

    // Sign Typed Data
    connector
        .signTypedData(msgParams)
        .then((result) => {
            // Returns signature.
            console.log(result);
        })
        .catch((error) => {
            // Error returned when rejected
            console.error(error);
        });
});

*/