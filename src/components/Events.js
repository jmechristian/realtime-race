import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listEvents } from '../graphql/queries';
import { SimpleGrid, Box } from '@chakra-ui/react';
import RaceItem from './RaceItem';

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const results = await API.graphql(graphqlOperation(listEvents));
      setEvents(results.data.listEvents.items);
    };

    fetchEvents();
  }, []);

  return (
    <SimpleGrid spacing={8} w='full' columns={[1, 1, 2, 3]}>
      {events &&
        events.map((e, i) => (
          <Box key={e.id} w='full' h='full'>
            <RaceItem
              title={e.title}
              date={e.date}
              description={e.description}
              thumbsup={e.thumbsup}
              happy={e.happy}
              heart={e.heart}
            />
          </Box>
        ))}
    </SimpleGrid>
  );
};

export default Events;
