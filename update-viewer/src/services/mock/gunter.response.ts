import { GunterUpdateDto } from "../../contracts/gunterUpdateDto";

export const getGunterResp: GunterUpdateDto = {
    steamDepots: [
        {
            buildId: "10044304",
            name: "Experimental",
            dateUpdated: new Date("2022-12-06T12:25:06"),
        },
        {
            buildId: "3223819",
            name: "Internal",
            dateUpdated: new Date("2022-12-14T12:57:14"),
        },
        {
            buildId: "10044304",
            name: "Public",
            dateUpdated: new Date("2022-12-06T15:18:28"),
        }
    ],
    gog: {
        version: "4.08 Expeditions 97029",
        dateUpdated: new Date("2022-11-30T17:39:01"),
    },
    ps4: [
        {
            version: "4.08",
            region: "asia",
            dateUpdated: new Date("2023-02-04T14:32:34"),
        },
        {
            version: "4.08",
            region: "eu",
            dateUpdated: new Date("2023-02-04T14:32:34"),
        },
        {
            version: "4.08",
            region: "jp",
            dateUpdated: new Date("2023-02-04T14:32:34"),
        },
        {
            version: "4.08",
            region: "us",
            dateUpdated: new Date("2023-02-04T14:32:34"),
        }
    ],
    ps5: {
        version: "4.08",
        dateUpdated: new Date("2023-02-04T14:32:34"),
    },
    switch: {
        version: "10",
        dateUpdated: new Date("2022-12-06T00:00:00"),
    }
}