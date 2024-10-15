import { useState } from "react"
import { useGetCategory } from "../hooks/queries"
import { useCreateCategory } from "../hooks/mutation"
import { Button } from "antd"

const Index = () => {
    const [params] = useState({
        limit: 2,
        page: 1,
        search: ''
    })
    const {data} = useGetCategory(params).data || {}
    console.log(data?.data?.categories)
    const {mutate} = useCreateCategory()
    const create = async () => {
      await mutate({name: 'new category_192'})
    }
  return (
    <><h1>Category</h1>
      <Button type="primary" onClick={create}>Create Category</Button>
    </>

  )
}

export default Index