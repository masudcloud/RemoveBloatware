document.querySelectorAll(".content").forEach((item, index) => {
	item.addEventListener("click", async (event) => {
		if (!navigator.clipboard) {
			// Clipboard API not available
			return;
		}
		try {
			await navigator.clipboard.writeText(event.target.innerText);
			alert("Copied to clipboard");
			
			var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied"
			
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	});
});
