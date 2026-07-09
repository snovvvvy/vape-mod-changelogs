const changelogs = {
    vape: {
        title: "Snow's Vape Mod",
        download: "https://raw.githubusercontent.com/snovvvvy/VapeV4ForRoblox/main/loadstring",

        entries: [
            {
                version: "1.0",
                game: "The Rake Remastered",
                date: "2026-06-14",

                changes: {
                    "Session Info": [
                        "Added SessionInfo Power",
                        "Added SessionInfo Time Until Day/Night",
                        "Added SessionInfo Distance Travelled",
                        "Added SessionInfo Rake Health"
                    ],

                    Render: [
                        "Added RakeESP",
                        "Added SupplyCrateESP",
                        "Added ScrapESP",
                        "Added TrapESP"
                    ],

                    Blatant: [
                        "Added AntiTrap",
                        "Added AutoSpacebar",
                        "Added PartialGodMode",
                        "Added NoFall"
                    ],

                    Troll: [
                        "Added Troll Category",
                        "Added SafehouseDoor"
                    ]
                }
            },

            {
                version: "1.1",
                game: "Raise a Floppa 2",
                date: "2026-06-16",

                changes: {
                    Blatant: [
                        "Added AutoClicker",
                        "Added AutoSave",
                        "Added LandLord (raises and collects roommate money)",
                        "Added Chef (automatically cooks anything and updates when new recipes are added)"
                    ],

                    Utility: [
                        "Added PlaySound (plays a specific sound of choice from the game)"
                    ],

                    Minigames: [
                        "Added AutoCollectMilkDelivery",
                        "Added AutoPet",
                        "Added AutoCleanPoop",
                        "Added AutoCollectMoney",
                        "Added AutoFillBowl",
                        "Added RoommateDialogue (changes initial roommate dialogue, 50% chance might work)"
                    ],

                    Troll: [
                        "Added Troll Category",
                        "Added THEOVENISONFIRE"
                    ]
                }
            },

            {
                version: "1.2",
                game: "Raise a Floppa 2",
                date: "2026-06-17",

                changes: {
                    Fixed: [
                        "LandLord now supports the Rich Roommate",
                        "Improved CollectionService tagging for pickup items"
                    ],

                    Minigames: [
                        "Added AutoCollectGold",
                        "Added AutoCollectMeteorites"
                    ]
                }
            },

            {
                version: "1.3",
                game: "Raise a Floppa 2",
                date: "2026-06-17",

                changes: {
                    Fixed: [
                        "Fixed RoommateDialogue",
                        "Optimized AutoCollectGold"
                    ],

                    Minigames: [
                        "Added RichRoommateDialogue (like RoommateDialogue but supports Rich Roommate)"
                    ]
                }
            },

            {
                version: "1.4",
                game: "Raise a Floppa 2",
                date: "2026-06-18",

                changes: {
                    Blatant: [
                        "Added FloppaGunners (customize the looks of your floppa gunners)",
                        "Added PickupTP (teleports to any pickup) [BETA]"
                    ]
                }
            },

            {
                version: "1.5",
                game: "PARRY!!",
                date: "2026-06-22",

                changes: {
                    Blatant: [
                        "Added AutoParry (option to enable perfect parry)",
                        "Added SpoofWeapon (spoofs weapon animation)"
                    ],

                    World: [
                        "Added DisableEffects [BETA] (attempts to destroy game effects)"
                    ]
                }
            },
            {
                version: "1.6",
                game: "PARRY!!",
                date: "2026-06-25",

                changes: {
                    Blatant: [
                        "Added AutoParry Update Rate (higher update rate = faster AutoParry)",
                        "Added AutoParry Mech Support (supports parrying with the mech in techno map)",
                        "Added Hitboxes (expands enemy hitboxes)",
                        "Fixed AutoParry Perfect Parry not working"
                    ],

                    Other: [
                        "Added anticheat bypass (credits to koya)"
                    ]
                }
            },
            {
                version: "1.7",
                game: "PARRY!!",
                date: "2026-06-26",

                changes: {
                    Blatant: [
                        "Added AutoOverCharge (automatically fills the overcharge bar if you own the upgrade)"
                    ],

                    World: [
                        "Added NewSong (change the background music to a song of your choice)"
                    ]
                }
            },

            {
                version: "1.8",
                game: "PARRY!!",
                date: "2026-06-26",

                changes: {
                    Blatant: [
                        "Added HipHeight (edit all enemies hip height)",
                        "Added AutoTeleport (automatically teleports behind enemies)",
                        "Added HitBoxes Expand Y option (expand enemy hitbox Y level)"
                    ],

                    Other: [
                        "Improved enemy tagging"
                    ]
                }
            },

            {
                version: "1.9",
                game: "PARRY!!",
                date: "2026-06-27",

                changes: {
                    Blatant: [
                        "Added DisableEventsAllowed (disables slit vision and jumpscares while keeping the modifier active)",
                        "AutoTeleport now attacks enemies"
                    ],

                    Other: [
                        "Rewrote the CollectionService bootstrapper",
                        "Fixed AutoTeleport crashing"
                    ]
                }
            },

            {
                version: "2.0",
                game: "The Battle Bricks",
                date: "2026-06-29",

                changes: {
                    Blatant: [
                        "Added AutoBank (automatically buys bank upgrades)",
                        "Added AutoBankPriority",
                        "Added AutoCannon (automatically fires the cannon)",
                        "Added AutoUnit (automatically spawns units)"
                    ],

                    Render: [
                        "Added DPSDisplay (shows unit DPS)",
                        "Added HealthBars (shows unit health)"
                    ]
                }
            },

            {
                version: "2.1",
                game: "PARRY!!",
                date: "2026-07-03",

                changes: {
                    Blatant: [
                        "Renamed AutoTeleport to AutoWin",
                        "Added AntiHazard (creates parts over hazards)",
                        "Cleaned up AutoParry code"
                    ],

                    Render: [
                        "Added DisableSugarcoatGui (disables annoying GUI when you perfect parry)"
                    ]
                }
            },
            {
                version: "2.2",
                game: "PARRY!!",
                date: "2026-07-06",

                changes: {
                    Render: [
                        "Moved DisableEventsAllowed to Render"
                    ],

                    Other: [
                        "Migrated to Vape Bundler (repository structure remains the same)",
                        "Reverted some changes to the Xylex ones",
                        "Removed early access to WIP modules"
                    ]
                }
            },
            {
                version: "2.3",
                game: "BIGGG UPDATE!!! 3 NEW GAMES!",
                date: "2026-07-09",

                changes: {
                    Funky_Friday: [
                        "Added AutoPlayer"
                    ],
                    Blood_Sweats_And_Pixels: [
                        "Added AntiDeath",
                        "Fixed chams not working",
                    ],
                    Infectious_Smile: [
                        "Added Antihazard",
                        "Added AntiInfect",
                        "Added AntiStun",
                        "Added AutoInfect",
                        "Added AutoReset",
                        "Added Reach (supports grab)",
                        "Added NoWeaponCooldown (supports grab)",
                    ],
                    Skywars: [
                        "Added AutoWin"
                    ],
                    Other: [
                        "now using customvape folder instead of newvape folder",
                        "Added twoslider negative numbers support"
                    ]
                }
            }
        ]
    },

    recepted: {
        title: "Recepted's Support",
        download: "https://raw.githubusercontent.com/receptedondc/Raise-A-Floppa-2-Vape-Support/main/9772878203.lua",

        entries: [
            {
                version: "1.0",
                game: "Raise a Floppa 2",
                date: "2026-06-16",

                changes: {
                    Added: [
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
            }
        ]
    }
};

const content = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


function sortEntries(entries) {
    return [...entries].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
}


function createCategory(name, items) {
    return `
        <div class="category">

            <div class="category-header">
                <span class="category-title">
                    ${escapeHTML(name)}
                </span>

                <span class="arrow">
                    ▼
                </span>
            </div>


            <div class="category-content">
                <ul>
                    ${items.map(item => `
                        <li>
                            ${escapeHTML(item)}
                        </li>
                    `).join("")}
                </ul>
            </div>

        </div>
    `;
}


function createEntry(entry) {

    const categories = Object.entries(entry.changes)
        .map(([name, items]) => {
            return createCategory(name, items);
        })
        .join("");


    return `
        <div class="card">

            <div class="version">
                v${escapeHTML(entry.version)}
                ${entry.game ? `: ${escapeHTML(entry.game)}` : ""}
            </div>


            <div class="date">
                ${formatDate(entry.date)}
            </div>


            ${categories}

        </div>
    `;
}


function setupCategories() {

    document
        .querySelectorAll(".category-header")
        .forEach(header => {

            header.addEventListener("click", () => {

                header
                    .parentElement
                    .classList
                    .toggle("open");

            });

        });

}


function render(tabKey) {

    const data = changelogs[tabKey];

    if (!data) {
        console.error(
            `Changelog "${tabKey}" does not exist`
        );
        return;
    }


    const entries = sortEntries(
        data.entries
    );


    content.innerHTML = `

        <div class="header">

            <h2 class="title">
                ${escapeHTML(data.title)}
            </h2>


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


        <div class="entries">

            ${
                entries
                    .map(createEntry)
                    .join("")
            }

        </div>

    `;


    setupCategories();
}



tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(button => {
            button.classList.remove("active");
        });


        tab.classList.add("active");


        render(
            tab.dataset.tab
        );

    });

});


render("vape");