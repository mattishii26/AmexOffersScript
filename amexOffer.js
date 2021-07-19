async function addMyAmexOffers() {
  // Retrieve all possible offers that can be added to card
  // Ignores non-"Add To Card"
  const availableOffers = document.querySelectorAll("button.btn.offer-cta");
  for (let offer of availableOffers) {
    const offerClicked = await offer.click();
  }
}
