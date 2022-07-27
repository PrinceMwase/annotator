import EditTokenCell from 'src/components/Token/EditTokenCell'

type TokenPageProps = {
  id: number
}

const EditTokenPage = ({ id }: TokenPageProps) => {
  return <EditTokenCell id={id} />
}

export default EditTokenPage
