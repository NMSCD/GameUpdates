export interface GunterUpdateDto {
    steamDepots: Array<SteamDepot>;
    gog: GunterUpdateBaseDto;
    ps4: Array<GunterUpdateBaseDto>;
    ps5: GunterUpdateBaseDto;
    switch: GunterUpdateBaseDto;
}

export interface SteamDepot {
    buildId: string;
    name: string;
    dateUpdated: Date;
}

export interface GunterUpdateBaseDto {
    version: string;
    region?: string;
    dateUpdated: Date;
}
