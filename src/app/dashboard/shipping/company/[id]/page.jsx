import Company from './Company';

const page = async ({params}) => {

    const id = params.id;

  return (
    <Company id = {id} />
  )
}

export default page