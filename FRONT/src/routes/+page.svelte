<script>
    import axios from "axios";

    const connect = () => {
        const backendUrl = "http://localhost:3000/api/test";
        const dataContainer = document.getElementById("data-content");
        
        axios
            .get(backendUrl)
            .then((response) => {
                // Handle success
                const data = response.data;
                dataContainer.textContent = data;
            })
            .catch((error) => {
                // Handle errors
                dataContainer.textContent = "Failed to fetch data";
                console.error("Error fetching data:", error);
            });
    };
</script>

<h1><div id="data-content">&nbsp;</div></h1>
<p><button on:click={connect}>Click Me</button></p>
