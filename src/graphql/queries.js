/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStarredEvent = /* GraphQL */ `
  query GetStarredEvent($id: ID!) {
    getStarredEvent(id: $id) {
      id
      owner
      Event {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      starredEventEventId
    }
  }
`;
export const listStarredEvents = /* GraphQL */ `
  query ListStarredEvents(
    $filter: ModelStarredEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStarredEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        Event {
          id
          title
          date
          description
          heart
          thumbsup
          happy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        starredEventEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStarredEvents = /* GraphQL */ `
  query SyncStarredEvents(
    $filter: ModelStarredEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStarredEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        Event {
          id
          title
          date
          description
          heart
          thumbsup
          happy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        starredEventEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      date
      description
      heart
      thumbsup
      happy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        date
        description
        heart
        thumbsup
        happy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
