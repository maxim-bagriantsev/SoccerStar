export const getDataSourceTeams = (teams) => {
    return teams.map(item => {
        return {
            key: item.id,
            nameTeams: item.name,
            country: item.area.name,
            shortName: item.tla,
            foundedDate: item.founded,
            colorClub: item.clubColors,
            homeStadium: item.venue,
            site: item.website,
        }
    })
}