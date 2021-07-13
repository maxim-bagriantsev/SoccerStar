export const getDataSource = (teams) => {
    return teams.map(item => {
        return {
            key: item.id,
            crestUrl: item.crestUrl,
            name: item.name,
            area: item.area.name,
            address: item.address,
            phone: item.phone,
            website: item.website,
            email: item.email,
            founded: item.founded,
            clubColors: item.clubColors,
        }
    })
}