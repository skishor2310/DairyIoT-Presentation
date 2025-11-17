const bmcData = [
    {
        id: "BMC-001",
        location: "College Road, Nashik",
        temperature: 4.5,
        tempStatus: "Increasing",
        capacity: 1000,
        milkQty: 250,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-002",
        location: "Nashik Road, Nashik",
        temperature: 5.5,
        tempStatus: "Increasing",
        capacity: 1000,
        milkQty: 750,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-003",
        location: "College Road, Nashik",
        temperature: 2.7,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 830,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-004",
        location: "Jente Road, Nashik",
        temperature: 2.3,
        tempStatus: "Decreasing",
        capacity: 700,
        milkQty: 500,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-005",
        location: "FC Road, Nashik",
        temperature: 3.1,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 900,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-006",
        location: "FC Road, Nashik",
        temperature: 2.4,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 750,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-007",
        location: "University Road, Nashik",
        temperature: 3.0,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 850,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-008",
        location: "FC Road, Nashik",
        temperature: 4.4,
        tempStatus: "Increasing",
        capacity: 1000,
        milkQty: 750,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "OPEN",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-009",
        location: "Satara Road, Nashik",
        temperature: 2.9,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 610,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-010",
        location: "Hadapsar Road, Nashik",
        temperature: 3.4,
        tempStatus: "Decreasing",
        capacity: 1000,
        milkQty: 450,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-011",
        location: "Jedhe Road, Nashik",
        temperature: 4.3,
        tempStatus: "Increasing",
        capacity: 1000,
        milkQty: 810,
        compressor1: "ON",
        compressor2: "OFF",
        agitator: "OFF",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    },
    {
        id: "BMC-012",
        location: "Ramchandra Road, Nashik",
        temperature: 2.4,
        tempStatus: "Decreasing",
        capacity: 750,
        milkQty: 290,
        compressor1: "ON",
        compressor2: "ON",
        agitator: "ON",
        door: "CLOSED",
        lastSync: "2025-11-15 10:44 AM"
    }
];

function getStatusColor(temp, tempStatus) {
    if (temp > 4 || tempStatus === "Increasing") return "danger";
    return "success";
}

function renderBMCCards() {
    const container = document.getElementById("coolers");
    container.innerHTML = "";

    bmcData.forEach((bmc) => {
        const filledPercent = ((bmc.milkQty / bmc.capacity) * 100).toFixed(1);
        const statusColor = getStatusColor(bmc.temperature, bmc.tempStatus);

        container.innerHTML += `
            <div class="col-sm-3">
                <div class="card bg-${statusColor} bg-opacity-10 border border-${statusColor} border-opacity-25">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1 fw-semibold fs-default">${bmc.id}</h6>
                                <div class="d-flex gap-2 align-items-center text-secondary fs-75">
                                    <i class="fi fi-rr-marker"></i>
                                    <span>${bmc.location}</span>
                                </div>
                            </div>
                            <div>
                                <h5 class="text-${statusColor} fw-bold d-flex gap-1 align-items-center mb-0">
                                    <i class="fi fi-rr-temperature-high"></i>
                                    ${bmc.temperature} °C
                                </h5>
                                <div class="text-${statusColor} fs-75 d-flex gap-1 align-items-center">
                                    ${bmc.tempStatus}
                                    <i class="fi fi-rr-arrow-small-${bmc.tempStatus === "Increasing" ? "up" : "down"}"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body py-1">
                        <div class="mb-2">
                            <div class="d-flex justify-content-between mb-1 fs-75">
                                <span>Capacity: ${bmc.capacity}L</span>
                                <span>(${filledPercent}% Filled)</span>
                                <span>Milk Qty: ${bmc.milkQty}L</span>
                            </div>

                            <div class="progress mb-1" style="height: 5px">
                                <div class="progress-bar bg-primary" style="width: ${filledPercent}%"></div>
                            </div>

                        </div>

                        <div class="row g-2">
                            ${generateStatusRow("Compressor 1", bmc.compressor1)}
                            ${generateStatusRow("Compressor 2", bmc.compressor2)}
                            ${generateStatusRow("Agitator", bmc.agitator)}
                            ${generateStatusRow("Door", bmc.door)}
                        </div>
                    </div>

                    <div class="card-footer fs-75 text-dark">
                        <div class="d-flex justify-content-end align-items-center gap-2">
                            <div>Last sync:</div>
                        <div class="fw-bold">${bmc.lastSync}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function generateStatusRow(title, status) {
    return `
        <div class="col-6">
            <div class="d-flex gap-2 fs-75">
                <span class="d-flex gap-2 align-items-center">
                    <i class="fi fi-rr-power"></i>${title}
                </span>
                <span class="badge bg-${status === "ON" || status === "CLOSED" ? "success" : "danger"} text-white">${status}</span>
            </div>
        </div>
    `;
}

renderBMCCards();
