#### Development Environment endpoints

POST - http://localhost:2468/api/contact/submit (Contact form submission)
POST - http://localhost:2468/api/volunteer/submit (Volunteer form submission)
POST - http://localhost:2468/api/housing/apply (Apply form submission)
POST - http://localhost:2468/api/about/get-involved (Get Involved form submission, about page)

TODO: LATER
POST - http://localhost:2468/api/newsletter/subscribe (Newsletter subscription)
POST - http://localhost:2468/api/newsletter/unsubscribe/:token (Newsletter unsubscribe)

#### Production Environment endpoints

POST - https://righthousing.org/api/contact/submit (Contact form submission)
POST - https://righthousing.org/api/volunteer/submit (Volunteer form submission)
POST - https://righthousing.org/api/housing/apply (Apply form submission)
POST - https://righthousing.org/api/about/get-involved (Get Involved form submission, about page)

TODO: LATER
POST - https://righthousing.org/api/newsletter/subscribe (Newsletter subscription)
POST - https://righthousing.org/api/newsletter/unsubscribe/:token (Newsletter unsubscribe)

netflify deploy --prod
