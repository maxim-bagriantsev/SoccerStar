export const culumns = [ // Название колонок в таблице
    {
        title: "Название соревнования",
        dataIndex: "nameCompetition",
        key: "nameCompetition",
        render: (text, item) => <a>{text}</a>
    },
    {
        title: "Место проведения",
        dataIndex: "area",
        key: "area",
        render: (text, item) => <a>{text}</a>
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