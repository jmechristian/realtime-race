/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStarredEvent = /* GraphQL */ `
  subscription OnCreateStarredEvent($owner: String) {
    onCreateStarredEvent(owner: $owner) {
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
export const onUpdateStarredEvent = /* GraphQL */ `
  subscription OnUpdateStarredEvent($owner: String) {
    onUpdateStarredEvent(owner: $owner) {
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
export const onDeleteStarredEvent = /* GraphQL */ `
  subscription OnDeleteStarredEvent($owner: String) {
    onDeleteStarredEvent(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
