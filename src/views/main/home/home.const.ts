export const columns = [
    {
        title: '参数标识',
        dataIndex: 'name',
        key: 'name',
        filteredValue: null,
        onFilter: (value: any, record: { name: string | any[] }) => record.name.includes(value),
    },
    {
        title: '英文名称',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
        sortOrder: 'descend',
        // width: '12%',
    },
    {
        title: '中文名称',
        dataIndex: 'address',
        // width: '30%',
        key: 'address',
    },
];

export const data = [
    {
        key: 1,
        name: 'John Brown sr.',
        age: 60,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
    },
    {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
    },
    {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
    },
    {
        key: 131,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
    },
    {
        key: 1311,
        name: 'Jim Green jr.',
        age: 25,
        address: 'London No. 3 Lake Park',
    },
    {
        key: 1312,
        name: 'Jimmy Green sr.',
        age: 18,
        address: 'London No. 4 Lake Park',
    },
    {
        key: 121,
        name: 'Jimmy Brown',
        age: 16,
        address: 'New York No. 3 Lake Park',
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
