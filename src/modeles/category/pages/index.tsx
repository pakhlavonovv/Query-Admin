import { useState } from 'react';
import { Button, Input, Table } from 'antd';
import CategoryModal from './modal';
import { useGetCategory } from '../hooks/queries';
import { useCreateCategory } from '../hooks/mutation';

const Index = () => {
  const [params, setParams] = useState({
    limit: 2,
    page: 1,
    search: '',
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const { data } = useGetCategory(params);
  const { mutate: createCategory } = useCreateCategory();

  const handleSearch = (e: any) => {
    setParams({ ...params, search: e.target.value });
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setParams({ ...params, page, limit: pageSize });
  };

  const openModal = () => {
    setEditingCategory(null); 
    setModalVisible(true);
  };

  const editCategory = (category: any) => {
    setEditingCategory(category);
    setModalVisible(true);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <>
          <Button onClick={() => editCategory(record)}>Edit</Button>
          <Button danger>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        <Button type="primary" onClick={openModal}>
          Create Category
        </Button>
        <Input className="w-[300px]" placeholder="Search category..." onChange={handleSearch} />
      </div>
      <Table
      className='mt-3'
        dataSource={data?.data?.categories}
        columns={columns}
        rowKey="id"
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: data?.data?.total,
          onChange: handlePaginationChange,
        }}
      />

      <CategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        category={editingCategory}
      />
    </>
  );
};

export default Index;
