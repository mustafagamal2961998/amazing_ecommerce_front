import Client from './Client';

const Page = async ({params}) => {

    const id = await params.id;

  return (
    <Client id={id} />
  )
}

export default Page
