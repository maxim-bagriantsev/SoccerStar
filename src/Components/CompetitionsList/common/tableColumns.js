export const culumns = [ // Название колонок в таблице
    {
        title: "Название соревнования",
        dataIndex: "nameCompetition",
        key: "nameCompetition",
        render: (text) => <a>{text}</a>
    },
    {
        title: "Местро проведения",
        dataIndex: "area",
        key: "area",
        render: (text) => <a>{text}</a>
    },
    {
        title: "Код страны",
        dataIndex: "countryCode",
        key: "countryCode",
    },
    {
        title: "Начало сезона",
        dataIndex: "startDate",
        key: "startDate",
    },
    {
        title: "Конец сезона",
        dataIndex: "endDate",
        key: "andDate",
    },
];