import TokenCell from 'src/components/Token/TokenCell'

type TokenPageProps = {
  id: number
}

const TokenPage = ({ id }: TokenPageProps) => {
  return <TokenCell id={id} />
}

export default TokenPage
