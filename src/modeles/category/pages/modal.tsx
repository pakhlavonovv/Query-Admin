import { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { useCreateCategory } from '../hooks/mutation';

interface CategoryModalProps {
  visible: boolean;
  onClose: () => void;
  category?: { name: string }; // Update uchun category parametri
}

const CategoryModal = ({ visible, onClose, category }: CategoryModalProps) => {
  const [form] = Form.useForm();
  const { mutate: createCategory } = useCreateCategory();

  const onFinish = (values: any) => {
    if (category) {
      // Agar tahrirlash bo'lsa
      console.log('Edit category:', values);
      // Update uchun hook chaqirish
    } else {
      createCategory(values); // Create yangi kategoriya
    }
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title={category ? 'Edit Category' : 'Create Category'}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          {category ? 'Update' : 'Create'}
        </Button>,
      ]}
    >
      <Form form={form} onFinish={onFinish} initialValues={category || { name: '' }}>
        <Form.Item name="name" label="Category Name" rules={[{ required: true, message: 'Please input the category name!' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
