import { useLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
    const data = useLoaderData();

    return (
        <EventForm event={data.event} />;
    );
};

export default EditEventPage;