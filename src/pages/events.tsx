import React, { useState, useMemo } from 'react';
// @ts-ignore
import Layout from '@theme/Layout';
import styles from './events.module.css';

// Import events data
// @ts-ignore
import eventsData from '../../events.json';

// Event type definitions
type EventType = 'community-call' | 'workshop' | 'conference' | 'sprint';

interface Event {
  id: number;
  title: string;
  type: EventType;
  description: string;
  date: string;
  time: string;
  timezone: string;
  duration: number;
  location: string;
  url: string | null;
  recurring: boolean;
  recurrence?: string;
  tags: string[];
}

// Icons as inline SVG
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Helper function to check if event is in the past
function isPastEvent(dateString: string): boolean {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate < today;
}

// Event Card Component
function EventCard({ event }: { event: Event }) {
  const isPast = isPastEvent(event.date);
  
  return (
    <div className={`${styles.eventCard} ${isPast ? styles.past : ''}`}>
      {event.recurring && (
        <div className={styles.recurringBadge}>
          {event.recurrence}
        </div>
      )}
      
      <div className={`${styles.eventType} ${styles[event.type.replace('-', '')]}`}>
        {event.type.replace('-', ' ')}
      </div>
      
      <h3 className={styles.eventTitle}>{event.title}</h3>
      <p className={styles.eventDescription}>{event.description}</p>
      
      <div className={styles.eventDetails}>
        <div className={styles.eventDetail}>
          <CalendarIcon />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className={styles.eventDetail}>
          <ClockIcon />
          <span>{event.time} {event.timezone} ({event.duration} min)</span>
        </div>
        <div className={styles.eventDetail}>
          <MapPinIcon />
          <span>{event.location}</span>
        </div>
      </div>
      
      {event.tags && event.tags.length > 0 && (
        <div className={styles.eventTags}>
          {event.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {event.url && (
        <a 
          href={event.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.eventLink}
        >
          {isPast ? 'View Details' : 'Register / Join'}
        </a>
      )}
    </div>
  );
}

// Main Events Page Component
export default function Events(): JSX.Element {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showPast, setShowPast] = useState<boolean>(false);

  // Sort and filter events
  const { upcomingEvents, pastEvents } = useMemo(() => {
    const events: Event[] = eventsData as Event[];
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const upcoming = events
      .filter(event => new Date(event.date) >= now)
      .filter(event => selectedType === 'all' || event.type === selectedType)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const past = events
      .filter(event => new Date(event.date) < now)
      .filter(event => selectedType === 'all' || event.type === selectedType)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { upcomingEvents: upcoming, pastEvents: past };
  }, [selectedType]);

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'community-call', label: 'Community Calls' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'conference', label: 'Conferences' },
    { value: 'sprint', label: 'Sprints' },
  ];

  return (
    <Layout
      title="Events"
      description="OpenRefine community events, workshops, and meetups">
      <main className={styles.eventsContainer}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>OpenRefine Events</h1>
          <p className={styles.headerDescription}>
            Join us at upcoming community calls, workshops, conferences, and contributor sprints. 
            Connect with other OpenRefine users and contributors around the world.
          </p>
          <a 
            href="https://forum.openrefine.org/t/openrefine-community-meetup/1276"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendarLink}
          >
            <CalendarIcon />
            Subscribe to Community Calendar
          </a>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Filter by type:</span>
            {eventTypes.map(type => (
              <button
                key={type.value}
                className={`${styles.filterButton} ${selectedType === type.value ? styles.active : ''}`}
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </button>
            ))}
          </div>
          
          <div className={styles.viewToggle}>
            <button
              className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button
              className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className={viewMode === 'grid' ? styles.eventsGrid : styles.eventsList}>
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className={styles.noEvents}>
              <div className={styles.noEventsIcon}>📅</div>
              <p>No upcoming events found. Check back soon!</p>
            </div>
          )}
        </div>

        {/* Past Events Toggle */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            className={styles.filterButton}
            onClick={() => setShowPast(!showPast)}
          >
            {showPast ? 'Hide Past Events' : 'Show Past Events'}
          </button>
        </div>

        {/* Past Events */}
        {showPast && pastEvents.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Past Events</h2>
            <div className={viewMode === 'grid' ? styles.eventsGrid : styles.eventsList}>
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
