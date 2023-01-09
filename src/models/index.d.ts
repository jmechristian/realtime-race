import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";





export declare class StarredEvent {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StarredEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly Event?: Event | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly starredEventEventId?: string | null;
  constructor(init: ModelInit<StarredEvent>);
  static copyOf(source: StarredEvent, mutator: (draft: MutableModel<StarredEvent>) => MutableModel<StarredEvent> | void): StarredEvent;
}

export declare class Event {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly heart?: number | null;
  readonly thumbsup?: number | null;
  readonly happy?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}