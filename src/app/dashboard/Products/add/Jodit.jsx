import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
});

const DynamicJoditEditor = (props) => {
  return <JoditEditor {...props} />;
};

export default DynamicJoditEditor;