const changelogs = {
    vape: {
        title: "snow's vape mod",
        download: "https://raw.githubusercontent.com/snovvvvy/VapeV4ForRoblox/main/loadstring",

        entries: [
            {
                version: "v1.0: The Rake Remastered",
                date: "2026-06-14",
                categories: [
                    {
                        name: "Session Info",
                        items: [
                            "SessionInfo Power",
                            "SessionInfo Time Until Day/Night",
                            "SessionInfo Distance Travelled",
                            "SessionInfo Rake Health"
                        ]
                    },
                    {
                        name: "Render",
                        items: [
                            "RakeESP",
                            "SupplyCrateESP",
                            "ScrapESP",
                            "TrapESP"
                        ]
                    },
                    {
                        name: "Blatant",
                        items: [
                            "AntiTrap",
                            "AutoSpacebar",
                            "PartialGodMode",
                            "NoFall"
                        ]
                    },
                    {
                        name: "Troll",
                        items: [
                            "Troll Category",
                            "SafehouseDoor"
                        ]
                    }
                ]
            },

            {
                version: "v1.1: Raise a Floppa 2",
                date: "2026-06-16",
                categories: [
                    {
                        name: "Blatant",
                        items: [
                            "AutoClicker",
                            "AutoSave",
                            "LandLord (raises and collects roommate money)",
                            "Chef (world class chef that cooks anything for you, automatically updates when new recipes are added.)"
                        ]
                    },
                    {
                        name: "Utility",
                        items: [
                            "PlaySound (Plays a specific sound of choice from the game)"
                        ]
                    },
                    {
                        name: "Minigames",
                        items: [
                            "AutoCollectMilkDelivery",
                            "AutoPet",
                            "AutoCleanPoop",
                            "AutoCollectMoney",
                            "AutoFillBowl",
                            "RoommateDialogue (change the initial roommate dialogue, 50% chance might work :troll:)"
                        ]
                    },
                    {
                        name: "Troll",
                        items: [
                            "Troll Category",
                            "THEOVENISONFIRE"
                        ]
                    }
                ]
            },

            {
                version: "v1.2: Raise a Floppa 2",
                date: "2026-06-17",
                categories: [
                    {
                        name: "Fixes and changes and improvements and modifications and adjustments and revisions and stuff",
                        items: [
                            "LandLord now supports the Rich Roommate",
                            "Improved Collection Service tagging for pickup items",
                        ]
                    },
                    {
                        name: "Minigames",
                        items: [
                            "Added AutoCollectGold",
                            "Added AutoCollectMeteorites",
                        ]
                    }
                ]
            },
            {
                version: "v1.3: Raise a Floppa 2",
                date: "2026-06-17",
                categories: [
                    {
                        name: "Fixes and changes and improvements and modifications and adjustments and revisions and stuff",
                        items: [
                            "Fixed RoommateDialogue",
                            "Optimized AutoCollectGold",
                        ]
                    },
                    {
                        name: "Minigames",
                        items: [
                            "Added RichRoommateDialogue (like RoommateDialogue but supports Rich Roommate)",
                        ]
                    }
                ]
            },
            {
                version: "v1.4: Raise a Floppa 2",
                date: "2026-06-18",
                categories: [
                    {
                        name: "Blatant",
                        items: [
                            "Added FloppaGunners (you can customize the looks of your floppa gunners, if you have any)",
                            "Added PickupTP (teleports to any pickup) [BETA]"
                        ]
                    }
                ]
            },
            {
                version: "v1.5: PARRY!!",
                date: "2026-06-22",
                categories: [
                    {
                        name: "Blatant",
                        items: [
                            "Added AutoParry (option to enable perfect parry)",
                            "Added SpoofWeapon (spoofs weapon animation)"
                        ]
                    },
                    {
                        name: "World",
                        items: [
                            "Added DisableEffects [BETA] (attemps to destroy game effects)",
                        ]
                    }
                ]
            },
            {
                version: "v1.6: PARRY!!",
                date: "2026-06-25",
                categories: [
                    {
                        name: "Blatant",
                        items: [
                            "Added AutoParry Update Rate (higher upd rate = faster autoparry)",
                            "Added AutoParry Mech Support (supports parrying with the mech in techno map)",
                            "Added Hitboxes (expands enemy hitboxes)",
                            "Fixed AutoParry Perfect Parry not working"
                        ]
                    },
                    {
                        name: "More",
                        items: [
                            "Added anticheat bypass (credits to koya)",
                        ]
                    },
                ]
            }
        ]
    },

    recepted: {
        title: "whatever recepted wants here",
        download: "https://raw.githubusercontent.com/receptedondc/Raise-A-Floppa-2-Vape-Support/main/9772878203.lua",

        entries: [
            {
                version: "v1.0: Raise a Floppa 2",
                date: "2026-06-16",
                categories: [
                    {
                        name: "Added",
                        items: [
                            "Exit Highlighter",
                            "AutoExit",
                            "AutoGamble",
                            "AutoPickup",
                            "AutoGold",
                            "AutoGem",
                            "EggAura",
                            "AutoClickFloppa",
                            "Disabler",
                            "AutoCash",
                            "SeedAura",
                            "AutoRent",
                            "AutoFish",
                            "Sprint"
                        ]
                    }
                ]
            }
        ]
    }
};

const content = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");

function render(tabKey) {
    const data = changelogs[tabKey];

    content.innerHTML = `
        <div class="header">
            <h2 class="title">${data.title}</h2>

            <a
                class="github-btn"
                href="${data.download}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Get the script here
            </a>
        </div>

        <div class="divider"></div>
    `;

    [...data.entries]
        .reverse()
        .forEach(entry => {
            const card = document.createElement("div");
            card.className = "card";

            let html = `
                <div class="version">${entry.version}</div>
                <div class="date">${entry.date}</div>
            `;

            entry.categories.forEach(category => {
                html += `
                    <div class="category">
                        <div class="category-header">
                            <span class="category-title">${category.name}</span>
                            <span class="arrow">▼</span>
                        </div>

                        <div class="category-content">
                            <ul>
                                ${category.items.map(item => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `;
            });

            card.innerHTML = html;
            content.appendChild(card);
        });

    document.querySelectorAll(".category-header").forEach(header => {
        header.addEventListener("click", () => {
            header.parentElement.classList.toggle("open");
        });
    });
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        render(tab.dataset.tab);
    });
});

render("vape");