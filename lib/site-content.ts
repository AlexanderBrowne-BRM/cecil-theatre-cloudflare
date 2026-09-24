export const organization = {
  name: 'Cecil Theatre Project',
  shortName: 'CTP',
  email: 'info@ceciltheatreproject.org',
  facebookUrl:
    'https://www.facebook.com/p/Cecil-Theatre-Project-61592213177020/',
  description:
    'Cecil Theatre Project is a new, locally rooted theatre organization creating opportunities to see, make, and participate in theatre in Cecil County.',
} as const;

export const currentProduction = {
  title: 'Little Shop of Horrors',
  label: 'Inaugural production',
  venue: {
    name: 'Elkton Music Hall',
    address: '107 North Street, Elkton, MD 21921',
  },
  ageRestriction: '21+',
  performances: [
    {
      id: 'friday',
      day: 'Fri',
      date: 'December 4, 2026',
      dateShort: 'Dec. 4',
      time: '7:00 PM',
      startsAt: '2026-12-04T19:00:00-05:00',
      endsAt: '2026-12-04T21:30:00-05:00',
      listingUrl: 'https://www.eventeny.com/events/littleshopofhorrors-33634/',
      ticketUrl:
        'https://www.eventeny.com/events/ticket/?id=33634&type=tickets&show=custom&custom=63488%7C63596',
    },
    {
      id: 'saturday',
      day: 'Sat',
      date: 'December 5, 2026',
      dateShort: 'Dec. 5',
      time: '2:00 PM',
      startsAt: '2026-12-05T14:00:00-05:00',
      endsAt: '2026-12-05T16:30:00-05:00',
      listingUrl:
        'https://www.eventeny.com/events/little-shop-of-horrors-sat-1252026-33696/',
      ticketUrl:
        'https://www.eventeny.com/events/ticket/?id=33696&type=tickets&show=custom&custom=63605%7C63604',
    },
  ],
  ticketing: {
    provider: 'Eventeny',
    status: 'sales-open-september-21',
    salesOpenAt: 'September 21, 2026 at 12:00 AM',
    tiers: [
      {
        name: 'General Admission',
        basePrice: '$25',
        onlineTotal: '$28.49',
        details: 'First-come seating outside the VIP hold.',
      },
      {
        name: 'VIP',
        basePrice: '$45',
        onlineTotal: '$51.02',
        details: 'First-two-row priority and one complimentary drink ticket.',
      },
    ],
  },
  description:
    'A struggling florist’s life changes when he discovers a mysterious plant with an appetite that keeps growing. This darkly comic musical blends sharp humor, memorable characters, and a cautionary story about wanting more than you bargained for.',
  credits: {
    bookAndLyrics: 'Howard Ashman',
    music: 'Alan Menken',
    license:
      'Presented through special arrangement with Music Theatre International. Final production billing is pending contract review.',
  },
} as const;

export const board = [
  {
    name: 'Zachery Tyler Lockwood',
    role: 'Founder / Board President',
    image: '/team/zachery-lockwood.jpg',
    imagePosition: '55% 30%',
  },
  {
    name: 'Brian Hunsberger',
    role: 'Board Treasurer',
    image: '/team/brian-hunsberger.jpg',
    imagePosition: '50% 38%',
  },
  {
    name: 'Crescent Maaz',
    role: 'Board Secretary',
    image: '/team/crescent-maaz.jpg',
    imagePosition: '50% 42%',
  },
  {
    name: 'Isabelle Wilson',
    role: 'Director',
    image: null,
    imagePosition: '50% 50%',
  },
  {
    name: 'Alycia Cloud',
    role: 'Director',
    image: '/team/alycia-cloud.jpg',
    imagePosition: '46% 20%',
  },
] as const;

export const visitFacts = [
  {
    title: 'Age & ID',
    summary:
      'This production is 21+ because of the venue. Bring a valid, non-expired ID for entry.',
  },
  {
    title: 'Parking',
    summary:
      'Most downtown public parking is free. A rear lot, street spaces, and municipal lots are within one or two blocks.',
  },
  {
    title: 'Friday arrival',
    summary:
      'Downtown tree-lighting activity overlaps Friday evening. Allow extra time for parking and the walk to the venue.',
  },
  {
    title: 'Accessible entry',
    summary:
      'Use the North Street entrance for step-free access. Public venue areas are on the first floor.',
  },
  {
    title: 'Drinks & food',
    summary:
      'Alcoholic and nonalcoholic drinks are available for purchase with cash or major cards. The venue does not normally serve food.',
  },
] as const;

export const pendingApprovals = [
  'Cast and creative-team roster, biographies, and approved photography',
  'Production artwork and portrait reuse permissions',
  'Exact door times and production running time',
  'Accessible-seat request process and production accessibility contact',
  'Late-seating, refund, exchange, transfer, cancellation, and postponement terms',
  'Named internal owner for form-submission follow-up',
  'Any sponsor, partner, testimonial, review, or press claims',
] as const;
