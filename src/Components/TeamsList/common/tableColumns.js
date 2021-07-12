export const culumns = [ // Название колонок в таблице
    {
        title: "Футбольный клуб",
        dataIndex: "nameTeams",
        key: "nameTeams",
        render: (text, item) => <a>{text}</a>
    },
    {
        title: "Страна",
        dataIndex: "country",
        key: "country",
    },
    {
        title: "Сокращенное название",
        dataIndex: "shortName",
        key: "shortName",
    },
    {
        title: "Год основания клуба",
        dataIndex: "foundedDate",
        key: "foundedDate",
    },
    {
        title: "Цвет клуба",
        dataIndex: "colorClub",
        key: "colorClub",
    },
    {
        title: "Домашний стадион",
        dataIndex: "homeStadium",
        key: "homeStadium",
    },
    {
        title: "Сайт",
        dataIndex: "site",
        key: "site",
    },
];