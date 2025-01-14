const presence = new Presence({
    clientId: "915811466353983519"
  }),
  browsingTImestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "nicehash_1024x1024",
    startTimestamp: browsingTImestamp
  };

  if (document.location.pathname === "/" || !document.location.pathname)
    presenceData.details = "Browsing...";
  else if (document.location.pathname.startsWith("/my/dashboard"))
    presenceData.details = "Looking at Dashboard";
  else if (document.location.pathname.startsWith("/my/mining/rigs"))
    presenceData.details = "Looking at rigs";
  else if (document.location.pathname.startsWith("/my/exchange"))
    presenceData.details = "Looking at exchange prices";
  else if (document.location.pathname.startsWith("/my/marketplace"))
    presenceData.details = "Looking to buy/sell hashpower!";
  else if (document.location.pathname.startsWith("/my/wallets"))
    presenceData.details = "Checking my Crypto Wallets!";

  if (presenceData.details) presence.setActivity(presenceData);
  else presence.setActivity();
});
