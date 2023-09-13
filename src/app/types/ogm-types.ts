import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  appBots: Array<App_Bot>;
  appBotsConnection: AppBotsConnection;
  appBotsAggregate: App_BotAggregateSelection;
  appServices: Array<App_Service>;
  appServicesConnection: AppServicesConnection;
  appServicesAggregate: App_ServiceAggregateSelection;
  appUsers: Array<App_User>;
  appUsersConnection: AppUsersConnection;
  appUsersAggregate: App_UserAggregateSelection;
  appConversations: Array<App_Conversation>;
  appConversationsConnection: AppConversationsConnection;
  appConversationsAggregate: App_ConversationAggregateSelection;
  appMessages: Array<App_Message>;
  appMessagesConnection: AppMessagesConnection;
  appMessagesAggregate: App_MessageAggregateSelection;
};

export type QueryAppBotsArgs = {
  where?: InputMaybe<App_BotWhere>;
  options?: InputMaybe<App_BotOptions>;
};

export type QueryAppBotsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<App_BotWhere>;
  sort?: InputMaybe<Array<InputMaybe<App_BotSort>>>;
};

export type QueryAppBotsAggregateArgs = {
  where?: InputMaybe<App_BotWhere>;
};

export type QueryAppServicesArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  options?: InputMaybe<App_ServiceOptions>;
};

export type QueryAppServicesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<App_ServiceWhere>;
  sort?: InputMaybe<Array<InputMaybe<App_ServiceSort>>>;
};

export type QueryAppServicesAggregateArgs = {
  where?: InputMaybe<App_ServiceWhere>;
};

export type QueryAppUsersArgs = {
  where?: InputMaybe<App_UserWhere>;
  options?: InputMaybe<App_UserOptions>;
};

export type QueryAppUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<App_UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<App_UserSort>>>;
};

export type QueryAppUsersAggregateArgs = {
  where?: InputMaybe<App_UserWhere>;
};

export type QueryAppConversationsArgs = {
  where?: InputMaybe<App_ConversationWhere>;
  options?: InputMaybe<App_ConversationOptions>;
};

export type QueryAppConversationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<App_ConversationWhere>;
  sort?: InputMaybe<Array<InputMaybe<App_ConversationSort>>>;
};

export type QueryAppConversationsAggregateArgs = {
  where?: InputMaybe<App_ConversationWhere>;
};

export type QueryAppMessagesArgs = {
  where?: InputMaybe<App_MessageWhere>;
  options?: InputMaybe<App_MessageOptions>;
};

export type QueryAppMessagesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<App_MessageWhere>;
  sort?: InputMaybe<Array<InputMaybe<App_MessageSort>>>;
};

export type QueryAppMessagesAggregateArgs = {
  where?: InputMaybe<App_MessageWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAppBots: CreateAppBotsMutationResponse;
  deleteAppBots: DeleteInfo;
  updateAppBots: UpdateAppBotsMutationResponse;
  createAppServices: CreateAppServicesMutationResponse;
  deleteAppServices: DeleteInfo;
  updateAppServices: UpdateAppServicesMutationResponse;
  createAppUsers: CreateAppUsersMutationResponse;
  deleteAppUsers: DeleteInfo;
  updateAppUsers: UpdateAppUsersMutationResponse;
  createAppConversations: CreateAppConversationsMutationResponse;
  deleteAppConversations: DeleteInfo;
  updateAppConversations: UpdateAppConversationsMutationResponse;
  createAppMessages: CreateAppMessagesMutationResponse;
  deleteAppMessages: DeleteInfo;
  updateAppMessages: UpdateAppMessagesMutationResponse;
};

export type MutationCreateAppBotsArgs = {
  input: Array<App_BotCreateInput>;
};

export type MutationDeleteAppBotsArgs = {
  where?: InputMaybe<App_BotWhere>;
  delete?: InputMaybe<App_BotDeleteInput>;
};

export type MutationUpdateAppBotsArgs = {
  where?: InputMaybe<App_BotWhere>;
  update?: InputMaybe<App_BotUpdateInput>;
  connect?: InputMaybe<App_BotConnectInput>;
  disconnect?: InputMaybe<App_BotDisconnectInput>;
  create?: InputMaybe<App_BotRelationInput>;
  delete?: InputMaybe<App_BotDeleteInput>;
};

export type MutationCreateAppServicesArgs = {
  input: Array<App_ServiceCreateInput>;
};

export type MutationDeleteAppServicesArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  delete?: InputMaybe<App_ServiceDeleteInput>;
};

export type MutationUpdateAppServicesArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  update?: InputMaybe<App_ServiceUpdateInput>;
  connect?: InputMaybe<App_ServiceConnectInput>;
  disconnect?: InputMaybe<App_ServiceDisconnectInput>;
  create?: InputMaybe<App_ServiceRelationInput>;
  delete?: InputMaybe<App_ServiceDeleteInput>;
};

export type MutationCreateAppUsersArgs = {
  input: Array<App_UserCreateInput>;
};

export type MutationDeleteAppUsersArgs = {
  where?: InputMaybe<App_UserWhere>;
  delete?: InputMaybe<App_UserDeleteInput>;
};

export type MutationUpdateAppUsersArgs = {
  where?: InputMaybe<App_UserWhere>;
  update?: InputMaybe<App_UserUpdateInput>;
  connect?: InputMaybe<App_UserConnectInput>;
  disconnect?: InputMaybe<App_UserDisconnectInput>;
  create?: InputMaybe<App_UserRelationInput>;
  delete?: InputMaybe<App_UserDeleteInput>;
};

export type MutationCreateAppConversationsArgs = {
  input: Array<App_ConversationCreateInput>;
};

export type MutationDeleteAppConversationsArgs = {
  where?: InputMaybe<App_ConversationWhere>;
  delete?: InputMaybe<App_ConversationDeleteInput>;
};

export type MutationUpdateAppConversationsArgs = {
  where?: InputMaybe<App_ConversationWhere>;
  update?: InputMaybe<App_ConversationUpdateInput>;
  connect?: InputMaybe<App_ConversationConnectInput>;
  disconnect?: InputMaybe<App_ConversationDisconnectInput>;
  create?: InputMaybe<App_ConversationRelationInput>;
  delete?: InputMaybe<App_ConversationDeleteInput>;
};

export type MutationCreateAppMessagesArgs = {
  input: Array<App_MessageCreateInput>;
};

export type MutationDeleteAppMessagesArgs = {
  where?: InputMaybe<App_MessageWhere>;
  delete?: InputMaybe<App_MessageDeleteInput>;
};

export type MutationUpdateAppMessagesArgs = {
  where?: InputMaybe<App_MessageWhere>;
  update?: InputMaybe<App_MessageUpdateInput>;
  connect?: InputMaybe<App_MessageConnectInput>;
  disconnect?: InputMaybe<App_MessageDisconnectInput>;
  create?: InputMaybe<App_MessageRelationInput>;
  delete?: InputMaybe<App_MessageDeleteInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type App_Tag_Recipient = App_Bot | App_User;

export type App_Bot = {
  __typename?: "App_Bot";
  id: Scalars["ID"]["output"];
  endpoint: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
  personName: Scalars["String"]["output"];
  services: Array<App_Service>;
  servicesAggregate?: Maybe<App_BotApp_ServiceServicesAggregationSelection>;
  conversations: Array<App_Conversation>;
  conversationsAggregate?: Maybe<App_BotApp_ConversationConversationsAggregationSelection>;
  servicesConnection: App_BotServicesConnection;
  conversationsConnection: App_BotConversationsConnection;
};

export type App_BotServicesArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  options?: InputMaybe<App_ServiceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_BotServicesAggregateArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_BotConversationsArgs = {
  where?: InputMaybe<App_ConversationWhere>;
  options?: InputMaybe<App_ConversationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_BotConversationsAggregateArgs = {
  where?: InputMaybe<App_ConversationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_BotServicesConnectionArgs = {
  where?: InputMaybe<App_BotServicesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_BotServicesConnectionSort>>;
};

export type App_BotConversationsConnectionArgs = {
  where?: InputMaybe<App_BotConversationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_BotConversationsConnectionSort>>;
};

export type App_BotAggregateSelection = {
  __typename?: "App_BotAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type App_BotApp_ConversationConversationsAggregationSelection = {
  __typename?: "App_BotApp_ConversationConversationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_BotApp_ConversationConversationsNodeAggregateSelection>;
};

export type App_BotApp_ConversationConversationsNodeAggregateSelection = {
  __typename?: "App_BotApp_ConversationConversationsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
};

export type App_BotApp_ServiceServicesAggregationSelection = {
  __typename?: "App_BotApp_ServiceServicesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_BotApp_ServiceServicesNodeAggregateSelection>;
};

export type App_BotApp_ServiceServicesNodeAggregateSelection = {
  __typename?: "App_BotApp_ServiceServicesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type App_BotConversationsConnection = {
  __typename?: "App_BotConversationsConnection";
  edges: Array<App_BotConversationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_BotConversationsRelationship = {
  __typename?: "App_BotConversationsRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Conversation;
};

export type App_BotEdge = {
  __typename?: "App_BotEdge";
  cursor: Scalars["String"]["output"];
  node: App_Bot;
};

export type App_BotServicesConnection = {
  __typename?: "App_BotServicesConnection";
  edges: Array<App_BotServicesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_BotServicesRelationship = {
  __typename?: "App_BotServicesRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Service;
};

export type App_Conversation = {
  __typename?: "App_Conversation";
  id: Scalars["ID"]["output"];
  messages: Array<App_Message>;
  messagesAggregate?: Maybe<App_ConversationApp_MessageMessagesAggregationSelection>;
  bots: Array<App_Bot>;
  botsAggregate?: Maybe<App_ConversationApp_BotBotsAggregationSelection>;
  service?: Maybe<App_Service>;
  serviceAggregate?: Maybe<App_ConversationApp_ServiceServiceAggregationSelection>;
  messagesConnection: App_ConversationMessagesConnection;
  botsConnection: App_ConversationBotsConnection;
  serviceConnection: App_ConversationServiceConnection;
};

export type App_ConversationMessagesArgs = {
  where?: InputMaybe<App_MessageWhere>;
  options?: InputMaybe<App_MessageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationMessagesAggregateArgs = {
  where?: InputMaybe<App_MessageWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationBotsArgs = {
  where?: InputMaybe<App_BotWhere>;
  options?: InputMaybe<App_BotOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationBotsAggregateArgs = {
  where?: InputMaybe<App_BotWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationServiceArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  options?: InputMaybe<App_ServiceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationServiceAggregateArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ConversationMessagesConnectionArgs = {
  where?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_ConversationMessagesConnectionSort>>;
};

export type App_ConversationBotsConnectionArgs = {
  where?: InputMaybe<App_ConversationBotsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_ConversationBotsConnectionSort>>;
};

export type App_ConversationServiceConnectionArgs = {
  where?: InputMaybe<App_ConversationServiceConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_ConversationServiceConnectionSort>>;
};

export type App_ConversationAggregateSelection = {
  __typename?: "App_ConversationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
};

export type App_ConversationApp_BotBotsAggregationSelection = {
  __typename?: "App_ConversationApp_BotBotsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_ConversationApp_BotBotsNodeAggregateSelection>;
};

export type App_ConversationApp_BotBotsNodeAggregateSelection = {
  __typename?: "App_ConversationApp_BotBotsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type App_ConversationApp_MessageMessagesAggregationSelection = {
  __typename?: "App_ConversationApp_MessageMessagesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_ConversationApp_MessageMessagesNodeAggregateSelection>;
};

export type App_ConversationApp_MessageMessagesNodeAggregateSelection = {
  __typename?: "App_ConversationApp_MessageMessagesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  from: StringAggregateSelectionNonNullable;
  text: StringAggregateSelectionNonNullable;
  timestamp: StringAggregateSelectionNonNullable;
};

export type App_ConversationApp_ServiceServiceAggregationSelection = {
  __typename?: "App_ConversationApp_ServiceServiceAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_ConversationApp_ServiceServiceNodeAggregateSelection>;
};

export type App_ConversationApp_ServiceServiceNodeAggregateSelection = {
  __typename?: "App_ConversationApp_ServiceServiceNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type App_ConversationBotsConnection = {
  __typename?: "App_ConversationBotsConnection";
  edges: Array<App_ConversationBotsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_ConversationBotsRelationship = {
  __typename?: "App_ConversationBotsRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Bot;
};

export type App_ConversationEdge = {
  __typename?: "App_ConversationEdge";
  cursor: Scalars["String"]["output"];
  node: App_Conversation;
};

export type App_ConversationMessagesConnection = {
  __typename?: "App_ConversationMessagesConnection";
  edges: Array<App_ConversationMessagesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_ConversationMessagesRelationship = {
  __typename?: "App_ConversationMessagesRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Message;
};

export type App_ConversationServiceConnection = {
  __typename?: "App_ConversationServiceConnection";
  edges: Array<App_ConversationServiceRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_ConversationServiceRelationship = {
  __typename?: "App_ConversationServiceRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Service;
};

export type App_Message = {
  __typename?: "App_Message";
  id: Scalars["ID"]["output"];
  from: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
  timestamp: Scalars["String"]["output"];
  tagged: Array<App_Tag_Recipient>;
  taggedConnection: App_MessageTaggedConnection;
};

export type App_MessageTaggedArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<App_Tag_RecipientWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_MessageTaggedConnectionArgs = {
  where?: InputMaybe<App_MessageTaggedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_MessageAggregateSelection = {
  __typename?: "App_MessageAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  from: StringAggregateSelectionNonNullable;
  text: StringAggregateSelectionNonNullable;
  timestamp: StringAggregateSelectionNonNullable;
};

export type App_MessageEdge = {
  __typename?: "App_MessageEdge";
  cursor: Scalars["String"]["output"];
  node: App_Message;
};

export type App_MessageTaggedConnection = {
  __typename?: "App_MessageTaggedConnection";
  edges: Array<App_MessageTaggedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_MessageTaggedRelationship = {
  __typename?: "App_MessageTaggedRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Tag_Recipient;
};

export type App_Service = {
  __typename?: "App_Service";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  bots: Array<App_Bot>;
  botsAggregate?: Maybe<App_ServiceApp_BotBotsAggregationSelection>;
  users: Array<App_User>;
  usersAggregate?: Maybe<App_ServiceApp_UserUsersAggregationSelection>;
  botsConnection: App_ServiceBotsConnection;
  usersConnection: App_ServiceUsersConnection;
};

export type App_ServiceBotsArgs = {
  where?: InputMaybe<App_BotWhere>;
  options?: InputMaybe<App_BotOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ServiceBotsAggregateArgs = {
  where?: InputMaybe<App_BotWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ServiceUsersArgs = {
  where?: InputMaybe<App_UserWhere>;
  options?: InputMaybe<App_UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ServiceUsersAggregateArgs = {
  where?: InputMaybe<App_UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_ServiceBotsConnectionArgs = {
  where?: InputMaybe<App_ServiceBotsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_ServiceBotsConnectionSort>>;
};

export type App_ServiceUsersConnectionArgs = {
  where?: InputMaybe<App_ServiceUsersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_ServiceUsersConnectionSort>>;
};

export type App_ServiceAggregateSelection = {
  __typename?: "App_ServiceAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type App_ServiceApp_BotBotsAggregationSelection = {
  __typename?: "App_ServiceApp_BotBotsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_ServiceApp_BotBotsNodeAggregateSelection>;
};

export type App_ServiceApp_BotBotsNodeAggregateSelection = {
  __typename?: "App_ServiceApp_BotBotsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type App_ServiceApp_UserUsersAggregationSelection = {
  __typename?: "App_ServiceApp_UserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_ServiceApp_UserUsersNodeAggregateSelection>;
};

export type App_ServiceApp_UserUsersNodeAggregateSelection = {
  __typename?: "App_ServiceApp_UserUsersNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
};

export type App_ServiceBotsConnection = {
  __typename?: "App_ServiceBotsConnection";
  edges: Array<App_ServiceBotsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_ServiceBotsRelationship = {
  __typename?: "App_ServiceBotsRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Bot;
};

export type App_ServiceEdge = {
  __typename?: "App_ServiceEdge";
  cursor: Scalars["String"]["output"];
  node: App_Service;
};

export type App_ServiceUsersConnection = {
  __typename?: "App_ServiceUsersConnection";
  edges: Array<App_ServiceUsersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_ServiceUsersRelationship = {
  __typename?: "App_ServiceUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: App_User;
};

export type App_User = {
  __typename?: "App_User";
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
  service?: Maybe<App_Service>;
  serviceAggregate?: Maybe<App_UserApp_ServiceServiceAggregationSelection>;
  serviceConnection: App_UserServiceConnection;
};

export type App_UserServiceArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  options?: InputMaybe<App_ServiceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_UserServiceAggregateArgs = {
  where?: InputMaybe<App_ServiceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type App_UserServiceConnectionArgs = {
  where?: InputMaybe<App_UserServiceConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<App_UserServiceConnectionSort>>;
};

export type App_UserAggregateSelection = {
  __typename?: "App_UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
};

export type App_UserApp_ServiceServiceAggregationSelection = {
  __typename?: "App_UserApp_ServiceServiceAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<App_UserApp_ServiceServiceNodeAggregateSelection>;
};

export type App_UserApp_ServiceServiceNodeAggregateSelection = {
  __typename?: "App_UserApp_ServiceServiceNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type App_UserEdge = {
  __typename?: "App_UserEdge";
  cursor: Scalars["String"]["output"];
  node: App_User;
};

export type App_UserServiceConnection = {
  __typename?: "App_UserServiceConnection";
  edges: Array<App_UserServiceRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type App_UserServiceRelationship = {
  __typename?: "App_UserServiceRelationship";
  cursor: Scalars["String"]["output"];
  node: App_Service;
};

export type AppBotsConnection = {
  __typename?: "AppBotsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<App_BotEdge>;
};

export type AppConversationsConnection = {
  __typename?: "AppConversationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<App_ConversationEdge>;
};

export type AppMessagesConnection = {
  __typename?: "AppMessagesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<App_MessageEdge>;
};

export type AppServicesConnection = {
  __typename?: "AppServicesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<App_ServiceEdge>;
};

export type AppUsersConnection = {
  __typename?: "AppUsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<App_UserEdge>;
};

export type CreateAppBotsMutationResponse = {
  __typename?: "CreateAppBotsMutationResponse";
  info: CreateInfo;
  appBots: Array<App_Bot>;
};

export type CreateAppConversationsMutationResponse = {
  __typename?: "CreateAppConversationsMutationResponse";
  info: CreateInfo;
  appConversations: Array<App_Conversation>;
};

export type CreateAppMessagesMutationResponse = {
  __typename?: "CreateAppMessagesMutationResponse";
  info: CreateInfo;
  appMessages: Array<App_Message>;
};

export type CreateAppServicesMutationResponse = {
  __typename?: "CreateAppServicesMutationResponse";
  info: CreateInfo;
  appServices: Array<App_Service>;
};

export type CreateAppUsersMutationResponse = {
  __typename?: "CreateAppUsersMutationResponse";
  info: CreateInfo;
  appUsers: Array<App_User>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"]["output"];
  longest: Scalars["ID"]["output"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"]["output"];
  longest: Scalars["String"]["output"];
};

export type UpdateAppBotsMutationResponse = {
  __typename?: "UpdateAppBotsMutationResponse";
  info: UpdateInfo;
  appBots: Array<App_Bot>;
};

export type UpdateAppConversationsMutationResponse = {
  __typename?: "UpdateAppConversationsMutationResponse";
  info: UpdateInfo;
  appConversations: Array<App_Conversation>;
};

export type UpdateAppMessagesMutationResponse = {
  __typename?: "UpdateAppMessagesMutationResponse";
  info: UpdateInfo;
  appMessages: Array<App_Message>;
};

export type UpdateAppServicesMutationResponse = {
  __typename?: "UpdateAppServicesMutationResponse";
  info: UpdateInfo;
  appServices: Array<App_Service>;
};

export type UpdateAppUsersMutationResponse = {
  __typename?: "UpdateAppUsersMutationResponse";
  info: UpdateInfo;
  appUsers: Array<App_User>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type App_BotConnectInput = {
  services?: InputMaybe<Array<App_BotServicesConnectFieldInput>>;
  conversations?: InputMaybe<Array<App_BotConversationsConnectFieldInput>>;
};

export type App_BotConnectWhere = {
  node: App_BotWhere;
};

export type App_BotConversationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_BotConversationsAggregateInput>>;
  OR?: InputMaybe<Array<App_BotConversationsAggregateInput>>;
  NOT?: InputMaybe<App_BotConversationsAggregateInput>;
  node?: InputMaybe<App_BotConversationsNodeAggregationWhereInput>;
};

export type App_BotConversationsConnectFieldInput = {
  where?: InputMaybe<App_ConversationConnectWhere>;
  connect?: InputMaybe<Array<App_ConversationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_BotConversationsConnectionSort = {
  node?: InputMaybe<App_ConversationSort>;
};

export type App_BotConversationsConnectionWhere = {
  AND?: InputMaybe<Array<App_BotConversationsConnectionWhere>>;
  OR?: InputMaybe<Array<App_BotConversationsConnectionWhere>>;
  NOT?: InputMaybe<App_BotConversationsConnectionWhere>;
  node?: InputMaybe<App_ConversationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_ConversationWhere>;
};

export type App_BotConversationsCreateFieldInput = {
  node: App_ConversationCreateInput;
};

export type App_BotConversationsDeleteFieldInput = {
  where?: InputMaybe<App_BotConversationsConnectionWhere>;
  delete?: InputMaybe<App_ConversationDeleteInput>;
};

export type App_BotConversationsDisconnectFieldInput = {
  where?: InputMaybe<App_BotConversationsConnectionWhere>;
  disconnect?: InputMaybe<App_ConversationDisconnectInput>;
};

export type App_BotConversationsFieldInput = {
  create?: InputMaybe<Array<App_BotConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_BotConversationsConnectFieldInput>>;
};

export type App_BotConversationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_BotConversationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_BotConversationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_BotConversationsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
};

export type App_BotConversationsUpdateConnectionInput = {
  node?: InputMaybe<App_ConversationUpdateInput>;
};

export type App_BotConversationsUpdateFieldInput = {
  where?: InputMaybe<App_BotConversationsConnectionWhere>;
  create?: InputMaybe<Array<App_BotConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_BotConversationsConnectFieldInput>>;
  update?: InputMaybe<App_BotConversationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_BotConversationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_BotConversationsDisconnectFieldInput>>;
};

export type App_BotCreateInput = {
  endpoint: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
  personName: Scalars["String"]["input"];
  services?: InputMaybe<App_BotServicesFieldInput>;
  conversations?: InputMaybe<App_BotConversationsFieldInput>;
};

export type App_BotDeleteInput = {
  services?: InputMaybe<Array<App_BotServicesDeleteFieldInput>>;
  conversations?: InputMaybe<Array<App_BotConversationsDeleteFieldInput>>;
};

export type App_BotDisconnectInput = {
  services?: InputMaybe<Array<App_BotServicesDisconnectFieldInput>>;
  conversations?: InputMaybe<Array<App_BotConversationsDisconnectFieldInput>>;
};

export type App_BotOptions = {
  /** Specify one or more App_BotSort objects to sort AppBots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<App_BotSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_BotRelationInput = {
  services?: InputMaybe<Array<App_BotServicesCreateFieldInput>>;
  conversations?: InputMaybe<Array<App_BotConversationsCreateFieldInput>>;
};

export type App_BotServicesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_BotServicesAggregateInput>>;
  OR?: InputMaybe<Array<App_BotServicesAggregateInput>>;
  NOT?: InputMaybe<App_BotServicesAggregateInput>;
  node?: InputMaybe<App_BotServicesNodeAggregationWhereInput>;
};

export type App_BotServicesConnectFieldInput = {
  where?: InputMaybe<App_ServiceConnectWhere>;
  connect?: InputMaybe<Array<App_ServiceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_BotServicesConnectionSort = {
  node?: InputMaybe<App_ServiceSort>;
};

export type App_BotServicesConnectionWhere = {
  AND?: InputMaybe<Array<App_BotServicesConnectionWhere>>;
  OR?: InputMaybe<Array<App_BotServicesConnectionWhere>>;
  NOT?: InputMaybe<App_BotServicesConnectionWhere>;
  node?: InputMaybe<App_ServiceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_ServiceWhere>;
};

export type App_BotServicesCreateFieldInput = {
  node: App_ServiceCreateInput;
};

export type App_BotServicesDeleteFieldInput = {
  where?: InputMaybe<App_BotServicesConnectionWhere>;
  delete?: InputMaybe<App_ServiceDeleteInput>;
};

export type App_BotServicesDisconnectFieldInput = {
  where?: InputMaybe<App_BotServicesConnectionWhere>;
  disconnect?: InputMaybe<App_ServiceDisconnectInput>;
};

export type App_BotServicesFieldInput = {
  create?: InputMaybe<Array<App_BotServicesCreateFieldInput>>;
  connect?: InputMaybe<Array<App_BotServicesConnectFieldInput>>;
};

export type App_BotServicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_BotServicesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_BotServicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_BotServicesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_BotServicesUpdateConnectionInput = {
  node?: InputMaybe<App_ServiceUpdateInput>;
};

export type App_BotServicesUpdateFieldInput = {
  where?: InputMaybe<App_BotServicesConnectionWhere>;
  create?: InputMaybe<Array<App_BotServicesCreateFieldInput>>;
  connect?: InputMaybe<Array<App_BotServicesConnectFieldInput>>;
  update?: InputMaybe<App_BotServicesUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_BotServicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_BotServicesDisconnectFieldInput>>;
};

/** Fields to sort AppBots by. The order in which sorts are applied is not guaranteed when specifying many fields in one App_BotSort object. */
export type App_BotSort = {
  id?: InputMaybe<SortDirection>;
  endpoint?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
  personName?: InputMaybe<SortDirection>;
};

export type App_BotUpdateInput = {
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  personName?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<Array<App_BotServicesUpdateFieldInput>>;
  conversations?: InputMaybe<Array<App_BotConversationsUpdateFieldInput>>;
};

export type App_BotWhere = {
  OR?: InputMaybe<Array<App_BotWhere>>;
  AND?: InputMaybe<Array<App_BotWhere>>;
  NOT?: InputMaybe<App_BotWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  endpoint_NOT?: InputMaybe<Scalars["String"]["input"]>;
  endpoint_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  endpoint_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  endpoint_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  endpoint_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  endpoint_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  endpoint_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  endpoint_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  endpoint_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["String"]["input"]>;
  username_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  username_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  personName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  personName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  personName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  personName_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  personName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  personName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  personName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  personName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  personName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  personName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `services_SOME` instead. */
  services?: InputMaybe<App_ServiceWhere>;
  /** @deprecated Use `services_NONE` instead. */
  services_NOT?: InputMaybe<App_ServiceWhere>;
  servicesAggregate?: InputMaybe<App_BotServicesAggregateInput>;
  /** Return App_Bots where all of the related App_Services match this filter */
  services_ALL?: InputMaybe<App_ServiceWhere>;
  /** Return App_Bots where none of the related App_Services match this filter */
  services_NONE?: InputMaybe<App_ServiceWhere>;
  /** Return App_Bots where one of the related App_Services match this filter */
  services_SINGLE?: InputMaybe<App_ServiceWhere>;
  /** Return App_Bots where some of the related App_Services match this filter */
  services_SOME?: InputMaybe<App_ServiceWhere>;
  /** @deprecated Use `conversations_SOME` instead. */
  conversations?: InputMaybe<App_ConversationWhere>;
  /** @deprecated Use `conversations_NONE` instead. */
  conversations_NOT?: InputMaybe<App_ConversationWhere>;
  conversationsAggregate?: InputMaybe<App_BotConversationsAggregateInput>;
  /** Return App_Bots where all of the related App_Conversations match this filter */
  conversations_ALL?: InputMaybe<App_ConversationWhere>;
  /** Return App_Bots where none of the related App_Conversations match this filter */
  conversations_NONE?: InputMaybe<App_ConversationWhere>;
  /** Return App_Bots where one of the related App_Conversations match this filter */
  conversations_SINGLE?: InputMaybe<App_ConversationWhere>;
  /** Return App_Bots where some of the related App_Conversations match this filter */
  conversations_SOME?: InputMaybe<App_ConversationWhere>;
  /** @deprecated Use `servicesConnection_SOME` instead. */
  servicesConnection?: InputMaybe<App_BotServicesConnectionWhere>;
  /** @deprecated Use `servicesConnection_NONE` instead. */
  servicesConnection_NOT?: InputMaybe<App_BotServicesConnectionWhere>;
  /** Return App_Bots where all of the related App_BotServicesConnections match this filter */
  servicesConnection_ALL?: InputMaybe<App_BotServicesConnectionWhere>;
  /** Return App_Bots where none of the related App_BotServicesConnections match this filter */
  servicesConnection_NONE?: InputMaybe<App_BotServicesConnectionWhere>;
  /** Return App_Bots where one of the related App_BotServicesConnections match this filter */
  servicesConnection_SINGLE?: InputMaybe<App_BotServicesConnectionWhere>;
  /** Return App_Bots where some of the related App_BotServicesConnections match this filter */
  servicesConnection_SOME?: InputMaybe<App_BotServicesConnectionWhere>;
  /** @deprecated Use `conversationsConnection_SOME` instead. */
  conversationsConnection?: InputMaybe<App_BotConversationsConnectionWhere>;
  /** @deprecated Use `conversationsConnection_NONE` instead. */
  conversationsConnection_NOT?: InputMaybe<App_BotConversationsConnectionWhere>;
  /** Return App_Bots where all of the related App_BotConversationsConnections match this filter */
  conversationsConnection_ALL?: InputMaybe<App_BotConversationsConnectionWhere>;
  /** Return App_Bots where none of the related App_BotConversationsConnections match this filter */
  conversationsConnection_NONE?: InputMaybe<App_BotConversationsConnectionWhere>;
  /** Return App_Bots where one of the related App_BotConversationsConnections match this filter */
  conversationsConnection_SINGLE?: InputMaybe<App_BotConversationsConnectionWhere>;
  /** Return App_Bots where some of the related App_BotConversationsConnections match this filter */
  conversationsConnection_SOME?: InputMaybe<App_BotConversationsConnectionWhere>;
};

export type App_ConversationBotsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_ConversationBotsAggregateInput>>;
  OR?: InputMaybe<Array<App_ConversationBotsAggregateInput>>;
  NOT?: InputMaybe<App_ConversationBotsAggregateInput>;
  node?: InputMaybe<App_ConversationBotsNodeAggregationWhereInput>;
};

export type App_ConversationBotsConnectFieldInput = {
  where?: InputMaybe<App_BotConnectWhere>;
  connect?: InputMaybe<Array<App_BotConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_ConversationBotsConnectionSort = {
  node?: InputMaybe<App_BotSort>;
};

export type App_ConversationBotsConnectionWhere = {
  AND?: InputMaybe<Array<App_ConversationBotsConnectionWhere>>;
  OR?: InputMaybe<Array<App_ConversationBotsConnectionWhere>>;
  NOT?: InputMaybe<App_ConversationBotsConnectionWhere>;
  node?: InputMaybe<App_BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_BotWhere>;
};

export type App_ConversationBotsCreateFieldInput = {
  node: App_BotCreateInput;
};

export type App_ConversationBotsDeleteFieldInput = {
  where?: InputMaybe<App_ConversationBotsConnectionWhere>;
  delete?: InputMaybe<App_BotDeleteInput>;
};

export type App_ConversationBotsDisconnectFieldInput = {
  where?: InputMaybe<App_ConversationBotsConnectionWhere>;
  disconnect?: InputMaybe<App_BotDisconnectInput>;
};

export type App_ConversationBotsFieldInput = {
  create?: InputMaybe<Array<App_ConversationBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ConversationBotsConnectFieldInput>>;
};

export type App_ConversationBotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_ConversationBotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_ConversationBotsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_ConversationBotsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ConversationBotsUpdateConnectionInput = {
  node?: InputMaybe<App_BotUpdateInput>;
};

export type App_ConversationBotsUpdateFieldInput = {
  where?: InputMaybe<App_ConversationBotsConnectionWhere>;
  create?: InputMaybe<Array<App_ConversationBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ConversationBotsConnectFieldInput>>;
  update?: InputMaybe<App_ConversationBotsUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_ConversationBotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_ConversationBotsDisconnectFieldInput>>;
};

export type App_ConversationConnectInput = {
  messages?: InputMaybe<Array<App_ConversationMessagesConnectFieldInput>>;
  bots?: InputMaybe<Array<App_ConversationBotsConnectFieldInput>>;
  service?: InputMaybe<App_ConversationServiceConnectFieldInput>;
};

export type App_ConversationConnectWhere = {
  node: App_ConversationWhere;
};

export type App_ConversationCreateInput = {
  messages?: InputMaybe<App_ConversationMessagesFieldInput>;
  bots?: InputMaybe<App_ConversationBotsFieldInput>;
  service?: InputMaybe<App_ConversationServiceFieldInput>;
};

export type App_ConversationDeleteInput = {
  messages?: InputMaybe<Array<App_ConversationMessagesDeleteFieldInput>>;
  bots?: InputMaybe<Array<App_ConversationBotsDeleteFieldInput>>;
  service?: InputMaybe<App_ConversationServiceDeleteFieldInput>;
};

export type App_ConversationDisconnectInput = {
  messages?: InputMaybe<Array<App_ConversationMessagesDisconnectFieldInput>>;
  bots?: InputMaybe<Array<App_ConversationBotsDisconnectFieldInput>>;
  service?: InputMaybe<App_ConversationServiceDisconnectFieldInput>;
};

export type App_ConversationMessagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_ConversationMessagesAggregateInput>>;
  OR?: InputMaybe<Array<App_ConversationMessagesAggregateInput>>;
  NOT?: InputMaybe<App_ConversationMessagesAggregateInput>;
  node?: InputMaybe<App_ConversationMessagesNodeAggregationWhereInput>;
};

export type App_ConversationMessagesConnectFieldInput = {
  where?: InputMaybe<App_MessageConnectWhere>;
  connect?: InputMaybe<Array<App_MessageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_ConversationMessagesConnectionSort = {
  node?: InputMaybe<App_MessageSort>;
};

export type App_ConversationMessagesConnectionWhere = {
  AND?: InputMaybe<Array<App_ConversationMessagesConnectionWhere>>;
  OR?: InputMaybe<Array<App_ConversationMessagesConnectionWhere>>;
  NOT?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  node?: InputMaybe<App_MessageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_MessageWhere>;
};

export type App_ConversationMessagesCreateFieldInput = {
  node: App_MessageCreateInput;
};

export type App_ConversationMessagesDeleteFieldInput = {
  where?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  delete?: InputMaybe<App_MessageDeleteInput>;
};

export type App_ConversationMessagesDisconnectFieldInput = {
  where?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  disconnect?: InputMaybe<App_MessageDisconnectInput>;
};

export type App_ConversationMessagesFieldInput = {
  create?: InputMaybe<Array<App_ConversationMessagesCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ConversationMessagesConnectFieldInput>>;
};

export type App_ConversationMessagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_ConversationMessagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_ConversationMessagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_ConversationMessagesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  from_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  from_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  from_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  from_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  from_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  from_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  from_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  from_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  from_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  from_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  from_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  from_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  from_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  from_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  from_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  from_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  from_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  from_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  from_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  from_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  from_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  text_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  text_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  timestamp_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  timestamp_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  timestamp_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  timestamp_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  timestamp_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  timestamp_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timestamp_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ConversationMessagesUpdateConnectionInput = {
  node?: InputMaybe<App_MessageUpdateInput>;
};

export type App_ConversationMessagesUpdateFieldInput = {
  where?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  create?: InputMaybe<Array<App_ConversationMessagesCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ConversationMessagesConnectFieldInput>>;
  update?: InputMaybe<App_ConversationMessagesUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_ConversationMessagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_ConversationMessagesDisconnectFieldInput>>;
};

export type App_ConversationOptions = {
  /** Specify one or more App_ConversationSort objects to sort AppConversations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<App_ConversationSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ConversationRelationInput = {
  messages?: InputMaybe<Array<App_ConversationMessagesCreateFieldInput>>;
  bots?: InputMaybe<Array<App_ConversationBotsCreateFieldInput>>;
  service?: InputMaybe<App_ConversationServiceCreateFieldInput>;
};

export type App_ConversationServiceAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_ConversationServiceAggregateInput>>;
  OR?: InputMaybe<Array<App_ConversationServiceAggregateInput>>;
  NOT?: InputMaybe<App_ConversationServiceAggregateInput>;
  node?: InputMaybe<App_ConversationServiceNodeAggregationWhereInput>;
};

export type App_ConversationServiceConnectFieldInput = {
  where?: InputMaybe<App_ServiceConnectWhere>;
  connect?: InputMaybe<App_ServiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_ConversationServiceConnectionSort = {
  node?: InputMaybe<App_ServiceSort>;
};

export type App_ConversationServiceConnectionWhere = {
  AND?: InputMaybe<Array<App_ConversationServiceConnectionWhere>>;
  OR?: InputMaybe<Array<App_ConversationServiceConnectionWhere>>;
  NOT?: InputMaybe<App_ConversationServiceConnectionWhere>;
  node?: InputMaybe<App_ServiceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_ServiceWhere>;
};

export type App_ConversationServiceCreateFieldInput = {
  node: App_ServiceCreateInput;
};

export type App_ConversationServiceDeleteFieldInput = {
  where?: InputMaybe<App_ConversationServiceConnectionWhere>;
  delete?: InputMaybe<App_ServiceDeleteInput>;
};

export type App_ConversationServiceDisconnectFieldInput = {
  where?: InputMaybe<App_ConversationServiceConnectionWhere>;
  disconnect?: InputMaybe<App_ServiceDisconnectInput>;
};

export type App_ConversationServiceFieldInput = {
  create?: InputMaybe<App_ConversationServiceCreateFieldInput>;
  connect?: InputMaybe<App_ConversationServiceConnectFieldInput>;
};

export type App_ConversationServiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_ConversationServiceNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_ConversationServiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_ConversationServiceNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ConversationServiceUpdateConnectionInput = {
  node?: InputMaybe<App_ServiceUpdateInput>;
};

export type App_ConversationServiceUpdateFieldInput = {
  where?: InputMaybe<App_ConversationServiceConnectionWhere>;
  create?: InputMaybe<App_ConversationServiceCreateFieldInput>;
  connect?: InputMaybe<App_ConversationServiceConnectFieldInput>;
  update?: InputMaybe<App_ConversationServiceUpdateConnectionInput>;
  delete?: InputMaybe<App_ConversationServiceDeleteFieldInput>;
  disconnect?: InputMaybe<App_ConversationServiceDisconnectFieldInput>;
};

/** Fields to sort AppConversations by. The order in which sorts are applied is not guaranteed when specifying many fields in one App_ConversationSort object. */
export type App_ConversationSort = {
  id?: InputMaybe<SortDirection>;
};

export type App_ConversationUpdateInput = {
  messages?: InputMaybe<Array<App_ConversationMessagesUpdateFieldInput>>;
  bots?: InputMaybe<Array<App_ConversationBotsUpdateFieldInput>>;
  service?: InputMaybe<App_ConversationServiceUpdateFieldInput>;
};

export type App_ConversationWhere = {
  OR?: InputMaybe<Array<App_ConversationWhere>>;
  AND?: InputMaybe<Array<App_ConversationWhere>>;
  NOT?: InputMaybe<App_ConversationWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Use `messages_SOME` instead. */
  messages?: InputMaybe<App_MessageWhere>;
  /** @deprecated Use `messages_NONE` instead. */
  messages_NOT?: InputMaybe<App_MessageWhere>;
  messagesAggregate?: InputMaybe<App_ConversationMessagesAggregateInput>;
  /** Return App_Conversations where all of the related App_Messages match this filter */
  messages_ALL?: InputMaybe<App_MessageWhere>;
  /** Return App_Conversations where none of the related App_Messages match this filter */
  messages_NONE?: InputMaybe<App_MessageWhere>;
  /** Return App_Conversations where one of the related App_Messages match this filter */
  messages_SINGLE?: InputMaybe<App_MessageWhere>;
  /** Return App_Conversations where some of the related App_Messages match this filter */
  messages_SOME?: InputMaybe<App_MessageWhere>;
  /** @deprecated Use `bots_SOME` instead. */
  bots?: InputMaybe<App_BotWhere>;
  /** @deprecated Use `bots_NONE` instead. */
  bots_NOT?: InputMaybe<App_BotWhere>;
  botsAggregate?: InputMaybe<App_ConversationBotsAggregateInput>;
  /** Return App_Conversations where all of the related App_Bots match this filter */
  bots_ALL?: InputMaybe<App_BotWhere>;
  /** Return App_Conversations where none of the related App_Bots match this filter */
  bots_NONE?: InputMaybe<App_BotWhere>;
  /** Return App_Conversations where one of the related App_Bots match this filter */
  bots_SINGLE?: InputMaybe<App_BotWhere>;
  /** Return App_Conversations where some of the related App_Bots match this filter */
  bots_SOME?: InputMaybe<App_BotWhere>;
  service?: InputMaybe<App_ServiceWhere>;
  service_NOT?: InputMaybe<App_ServiceWhere>;
  serviceAggregate?: InputMaybe<App_ConversationServiceAggregateInput>;
  /** @deprecated Use `messagesConnection_SOME` instead. */
  messagesConnection?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** @deprecated Use `messagesConnection_NONE` instead. */
  messagesConnection_NOT?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** Return App_Conversations where all of the related App_ConversationMessagesConnections match this filter */
  messagesConnection_ALL?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** Return App_Conversations where none of the related App_ConversationMessagesConnections match this filter */
  messagesConnection_NONE?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** Return App_Conversations where one of the related App_ConversationMessagesConnections match this filter */
  messagesConnection_SINGLE?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** Return App_Conversations where some of the related App_ConversationMessagesConnections match this filter */
  messagesConnection_SOME?: InputMaybe<App_ConversationMessagesConnectionWhere>;
  /** @deprecated Use `botsConnection_SOME` instead. */
  botsConnection?: InputMaybe<App_ConversationBotsConnectionWhere>;
  /** @deprecated Use `botsConnection_NONE` instead. */
  botsConnection_NOT?: InputMaybe<App_ConversationBotsConnectionWhere>;
  /** Return App_Conversations where all of the related App_ConversationBotsConnections match this filter */
  botsConnection_ALL?: InputMaybe<App_ConversationBotsConnectionWhere>;
  /** Return App_Conversations where none of the related App_ConversationBotsConnections match this filter */
  botsConnection_NONE?: InputMaybe<App_ConversationBotsConnectionWhere>;
  /** Return App_Conversations where one of the related App_ConversationBotsConnections match this filter */
  botsConnection_SINGLE?: InputMaybe<App_ConversationBotsConnectionWhere>;
  /** Return App_Conversations where some of the related App_ConversationBotsConnections match this filter */
  botsConnection_SOME?: InputMaybe<App_ConversationBotsConnectionWhere>;
  serviceConnection?: InputMaybe<App_ConversationServiceConnectionWhere>;
  serviceConnection_NOT?: InputMaybe<App_ConversationServiceConnectionWhere>;
};

export type App_MessageConnectInput = {
  tagged?: InputMaybe<App_MessageTaggedConnectInput>;
};

export type App_MessageConnectWhere = {
  node: App_MessageWhere;
};

export type App_MessageCreateInput = {
  from: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
  timestamp: Scalars["String"]["input"];
  tagged?: InputMaybe<App_MessageTaggedCreateInput>;
};

export type App_MessageDeleteInput = {
  tagged?: InputMaybe<App_MessageTaggedDeleteInput>;
};

export type App_MessageDisconnectInput = {
  tagged?: InputMaybe<App_MessageTaggedDisconnectInput>;
};

export type App_MessageOptions = {
  /** Specify one or more App_MessageSort objects to sort AppMessages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<App_MessageSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_MessageRelationInput = {
  tagged?: InputMaybe<App_MessageTaggedCreateFieldInput>;
};

/** Fields to sort AppMessages by. The order in which sorts are applied is not guaranteed when specifying many fields in one App_MessageSort object. */
export type App_MessageSort = {
  id?: InputMaybe<SortDirection>;
  from?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type App_MessageTaggedApp_BotConnectFieldInput = {
  where?: InputMaybe<App_BotConnectWhere>;
  connect?: InputMaybe<Array<App_BotConnectInput>>;
};

export type App_MessageTaggedApp_BotConnectionWhere = {
  OR?: InputMaybe<Array<App_MessageTaggedApp_BotConnectionWhere>>;
  AND?: InputMaybe<Array<App_MessageTaggedApp_BotConnectionWhere>>;
  NOT?: InputMaybe<App_MessageTaggedApp_BotConnectionWhere>;
  node?: InputMaybe<App_BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_BotWhere>;
};

export type App_MessageTaggedApp_BotCreateFieldInput = {
  node: App_BotCreateInput;
};

export type App_MessageTaggedApp_BotDeleteFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_BotConnectionWhere>;
  delete?: InputMaybe<App_BotDeleteInput>;
};

export type App_MessageTaggedApp_BotDisconnectFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_BotConnectionWhere>;
  disconnect?: InputMaybe<App_BotDisconnectInput>;
};

export type App_MessageTaggedApp_BotFieldInput = {
  create?: InputMaybe<Array<App_MessageTaggedApp_BotCreateFieldInput>>;
  connect?: InputMaybe<Array<App_MessageTaggedApp_BotConnectFieldInput>>;
};

export type App_MessageTaggedApp_BotUpdateConnectionInput = {
  node?: InputMaybe<App_BotUpdateInput>;
};

export type App_MessageTaggedApp_BotUpdateFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_BotConnectionWhere>;
  create?: InputMaybe<Array<App_MessageTaggedApp_BotCreateFieldInput>>;
  connect?: InputMaybe<Array<App_MessageTaggedApp_BotConnectFieldInput>>;
  delete?: InputMaybe<Array<App_MessageTaggedApp_BotDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_MessageTaggedApp_BotDisconnectFieldInput>>;
  update?: InputMaybe<App_MessageTaggedApp_BotUpdateConnectionInput>;
};

export type App_MessageTaggedApp_UserConnectFieldInput = {
  where?: InputMaybe<App_UserConnectWhere>;
  connect?: InputMaybe<Array<App_UserConnectInput>>;
};

export type App_MessageTaggedApp_UserConnectionWhere = {
  OR?: InputMaybe<Array<App_MessageTaggedApp_UserConnectionWhere>>;
  AND?: InputMaybe<Array<App_MessageTaggedApp_UserConnectionWhere>>;
  NOT?: InputMaybe<App_MessageTaggedApp_UserConnectionWhere>;
  node?: InputMaybe<App_UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_UserWhere>;
};

export type App_MessageTaggedApp_UserCreateFieldInput = {
  node: App_UserCreateInput;
};

export type App_MessageTaggedApp_UserDeleteFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_UserConnectionWhere>;
  delete?: InputMaybe<App_UserDeleteInput>;
};

export type App_MessageTaggedApp_UserDisconnectFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_UserConnectionWhere>;
  disconnect?: InputMaybe<App_UserDisconnectInput>;
};

export type App_MessageTaggedApp_UserFieldInput = {
  create?: InputMaybe<Array<App_MessageTaggedApp_UserCreateFieldInput>>;
  connect?: InputMaybe<Array<App_MessageTaggedApp_UserConnectFieldInput>>;
};

export type App_MessageTaggedApp_UserUpdateConnectionInput = {
  node?: InputMaybe<App_UserUpdateInput>;
};

export type App_MessageTaggedApp_UserUpdateFieldInput = {
  where?: InputMaybe<App_MessageTaggedApp_UserConnectionWhere>;
  create?: InputMaybe<Array<App_MessageTaggedApp_UserCreateFieldInput>>;
  connect?: InputMaybe<Array<App_MessageTaggedApp_UserConnectFieldInput>>;
  delete?: InputMaybe<Array<App_MessageTaggedApp_UserDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_MessageTaggedApp_UserDisconnectFieldInput>>;
  update?: InputMaybe<App_MessageTaggedApp_UserUpdateConnectionInput>;
};

export type App_MessageTaggedConnectInput = {
  App_Bot?: InputMaybe<Array<App_MessageTaggedApp_BotConnectFieldInput>>;
  App_User?: InputMaybe<Array<App_MessageTaggedApp_UserConnectFieldInput>>;
};

export type App_MessageTaggedConnectionWhere = {
  App_Bot?: InputMaybe<App_MessageTaggedApp_BotConnectionWhere>;
  App_User?: InputMaybe<App_MessageTaggedApp_UserConnectionWhere>;
};

export type App_MessageTaggedCreateFieldInput = {
  App_Bot?: InputMaybe<Array<App_MessageTaggedApp_BotCreateFieldInput>>;
  App_User?: InputMaybe<Array<App_MessageTaggedApp_UserCreateFieldInput>>;
};

export type App_MessageTaggedCreateInput = {
  App_Bot?: InputMaybe<App_MessageTaggedApp_BotFieldInput>;
  App_User?: InputMaybe<App_MessageTaggedApp_UserFieldInput>;
};

export type App_MessageTaggedDeleteInput = {
  App_Bot?: InputMaybe<Array<App_MessageTaggedApp_BotDeleteFieldInput>>;
  App_User?: InputMaybe<Array<App_MessageTaggedApp_UserDeleteFieldInput>>;
};

export type App_MessageTaggedDisconnectInput = {
  App_Bot?: InputMaybe<Array<App_MessageTaggedApp_BotDisconnectFieldInput>>;
  App_User?: InputMaybe<Array<App_MessageTaggedApp_UserDisconnectFieldInput>>;
};

export type App_MessageTaggedUpdateInput = {
  App_Bot?: InputMaybe<Array<App_MessageTaggedApp_BotUpdateFieldInput>>;
  App_User?: InputMaybe<Array<App_MessageTaggedApp_UserUpdateFieldInput>>;
};

export type App_MessageUpdateInput = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["String"]["input"]>;
  tagged?: InputMaybe<App_MessageTaggedUpdateInput>;
};

export type App_MessageWhere = {
  OR?: InputMaybe<Array<App_MessageWhere>>;
  AND?: InputMaybe<Array<App_MessageWhere>>;
  NOT?: InputMaybe<App_MessageWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  from_NOT?: InputMaybe<Scalars["String"]["input"]>;
  from_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  from_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  from_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  from_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  from_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  from_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  from_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  from_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT?: InputMaybe<Scalars["String"]["input"]>;
  text_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  text_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  text_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  text_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT?: InputMaybe<Scalars["String"]["input"]>;
  timestamp_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  timestamp_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  timestamp_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  timestamp_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `taggedConnection_SOME` instead. */
  taggedConnection?: InputMaybe<App_MessageTaggedConnectionWhere>;
  /** @deprecated Use `taggedConnection_NONE` instead. */
  taggedConnection_NOT?: InputMaybe<App_MessageTaggedConnectionWhere>;
  /** Return App_Messages where all of the related App_MessageTaggedConnections match this filter */
  taggedConnection_ALL?: InputMaybe<App_MessageTaggedConnectionWhere>;
  /** Return App_Messages where none of the related App_MessageTaggedConnections match this filter */
  taggedConnection_NONE?: InputMaybe<App_MessageTaggedConnectionWhere>;
  /** Return App_Messages where one of the related App_MessageTaggedConnections match this filter */
  taggedConnection_SINGLE?: InputMaybe<App_MessageTaggedConnectionWhere>;
  /** Return App_Messages where some of the related App_MessageTaggedConnections match this filter */
  taggedConnection_SOME?: InputMaybe<App_MessageTaggedConnectionWhere>;
};

export type App_ServiceBotsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_ServiceBotsAggregateInput>>;
  OR?: InputMaybe<Array<App_ServiceBotsAggregateInput>>;
  NOT?: InputMaybe<App_ServiceBotsAggregateInput>;
  node?: InputMaybe<App_ServiceBotsNodeAggregationWhereInput>;
};

export type App_ServiceBotsConnectFieldInput = {
  where?: InputMaybe<App_BotConnectWhere>;
  connect?: InputMaybe<Array<App_BotConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_ServiceBotsConnectionSort = {
  node?: InputMaybe<App_BotSort>;
};

export type App_ServiceBotsConnectionWhere = {
  AND?: InputMaybe<Array<App_ServiceBotsConnectionWhere>>;
  OR?: InputMaybe<Array<App_ServiceBotsConnectionWhere>>;
  NOT?: InputMaybe<App_ServiceBotsConnectionWhere>;
  node?: InputMaybe<App_BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_BotWhere>;
};

export type App_ServiceBotsCreateFieldInput = {
  node: App_BotCreateInput;
};

export type App_ServiceBotsDeleteFieldInput = {
  where?: InputMaybe<App_ServiceBotsConnectionWhere>;
  delete?: InputMaybe<App_BotDeleteInput>;
};

export type App_ServiceBotsDisconnectFieldInput = {
  where?: InputMaybe<App_ServiceBotsConnectionWhere>;
  disconnect?: InputMaybe<App_BotDisconnectInput>;
};

export type App_ServiceBotsFieldInput = {
  create?: InputMaybe<Array<App_ServiceBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ServiceBotsConnectFieldInput>>;
};

export type App_ServiceBotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_ServiceBotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_ServiceBotsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_ServiceBotsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  endpoint_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  endpoint_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  endpoint_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  endpoint_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  personName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  personName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  personName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  personName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ServiceBotsUpdateConnectionInput = {
  node?: InputMaybe<App_BotUpdateInput>;
};

export type App_ServiceBotsUpdateFieldInput = {
  where?: InputMaybe<App_ServiceBotsConnectionWhere>;
  create?: InputMaybe<Array<App_ServiceBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ServiceBotsConnectFieldInput>>;
  update?: InputMaybe<App_ServiceBotsUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_ServiceBotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_ServiceBotsDisconnectFieldInput>>;
};

export type App_ServiceConnectInput = {
  bots?: InputMaybe<Array<App_ServiceBotsConnectFieldInput>>;
  users?: InputMaybe<Array<App_ServiceUsersConnectFieldInput>>;
};

export type App_ServiceConnectWhere = {
  node: App_ServiceWhere;
};

export type App_ServiceCreateInput = {
  name: Scalars["String"]["input"];
  bots?: InputMaybe<App_ServiceBotsFieldInput>;
  users?: InputMaybe<App_ServiceUsersFieldInput>;
};

export type App_ServiceDeleteInput = {
  bots?: InputMaybe<Array<App_ServiceBotsDeleteFieldInput>>;
  users?: InputMaybe<Array<App_ServiceUsersDeleteFieldInput>>;
};

export type App_ServiceDisconnectInput = {
  bots?: InputMaybe<Array<App_ServiceBotsDisconnectFieldInput>>;
  users?: InputMaybe<Array<App_ServiceUsersDisconnectFieldInput>>;
};

export type App_ServiceOptions = {
  /** Specify one or more App_ServiceSort objects to sort AppServices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<App_ServiceSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ServiceRelationInput = {
  bots?: InputMaybe<Array<App_ServiceBotsCreateFieldInput>>;
  users?: InputMaybe<Array<App_ServiceUsersCreateFieldInput>>;
};

/** Fields to sort AppServices by. The order in which sorts are applied is not guaranteed when specifying many fields in one App_ServiceSort object. */
export type App_ServiceSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type App_ServiceUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  bots?: InputMaybe<Array<App_ServiceBotsUpdateFieldInput>>;
  users?: InputMaybe<Array<App_ServiceUsersUpdateFieldInput>>;
};

export type App_ServiceUsersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_ServiceUsersAggregateInput>>;
  OR?: InputMaybe<Array<App_ServiceUsersAggregateInput>>;
  NOT?: InputMaybe<App_ServiceUsersAggregateInput>;
  node?: InputMaybe<App_ServiceUsersNodeAggregationWhereInput>;
};

export type App_ServiceUsersConnectFieldInput = {
  where?: InputMaybe<App_UserConnectWhere>;
  connect?: InputMaybe<Array<App_UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_ServiceUsersConnectionSort = {
  node?: InputMaybe<App_UserSort>;
};

export type App_ServiceUsersConnectionWhere = {
  AND?: InputMaybe<Array<App_ServiceUsersConnectionWhere>>;
  OR?: InputMaybe<Array<App_ServiceUsersConnectionWhere>>;
  NOT?: InputMaybe<App_ServiceUsersConnectionWhere>;
  node?: InputMaybe<App_UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_UserWhere>;
};

export type App_ServiceUsersCreateFieldInput = {
  node: App_UserCreateInput;
};

export type App_ServiceUsersDeleteFieldInput = {
  where?: InputMaybe<App_ServiceUsersConnectionWhere>;
  delete?: InputMaybe<App_UserDeleteInput>;
};

export type App_ServiceUsersDisconnectFieldInput = {
  where?: InputMaybe<App_ServiceUsersConnectionWhere>;
  disconnect?: InputMaybe<App_UserDisconnectInput>;
};

export type App_ServiceUsersFieldInput = {
  create?: InputMaybe<Array<App_ServiceUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ServiceUsersConnectFieldInput>>;
};

export type App_ServiceUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_ServiceUsersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_ServiceUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_ServiceUsersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_ServiceUsersUpdateConnectionInput = {
  node?: InputMaybe<App_UserUpdateInput>;
};

export type App_ServiceUsersUpdateFieldInput = {
  where?: InputMaybe<App_ServiceUsersConnectionWhere>;
  create?: InputMaybe<Array<App_ServiceUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<App_ServiceUsersConnectFieldInput>>;
  update?: InputMaybe<App_ServiceUsersUpdateConnectionInput>;
  delete?: InputMaybe<Array<App_ServiceUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<App_ServiceUsersDisconnectFieldInput>>;
};

export type App_ServiceWhere = {
  OR?: InputMaybe<Array<App_ServiceWhere>>;
  AND?: InputMaybe<Array<App_ServiceWhere>>;
  NOT?: InputMaybe<App_ServiceWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `bots_SOME` instead. */
  bots?: InputMaybe<App_BotWhere>;
  /** @deprecated Use `bots_NONE` instead. */
  bots_NOT?: InputMaybe<App_BotWhere>;
  botsAggregate?: InputMaybe<App_ServiceBotsAggregateInput>;
  /** Return App_Services where all of the related App_Bots match this filter */
  bots_ALL?: InputMaybe<App_BotWhere>;
  /** Return App_Services where none of the related App_Bots match this filter */
  bots_NONE?: InputMaybe<App_BotWhere>;
  /** Return App_Services where one of the related App_Bots match this filter */
  bots_SINGLE?: InputMaybe<App_BotWhere>;
  /** Return App_Services where some of the related App_Bots match this filter */
  bots_SOME?: InputMaybe<App_BotWhere>;
  /** @deprecated Use `users_SOME` instead. */
  users?: InputMaybe<App_UserWhere>;
  /** @deprecated Use `users_NONE` instead. */
  users_NOT?: InputMaybe<App_UserWhere>;
  usersAggregate?: InputMaybe<App_ServiceUsersAggregateInput>;
  /** Return App_Services where all of the related App_Users match this filter */
  users_ALL?: InputMaybe<App_UserWhere>;
  /** Return App_Services where none of the related App_Users match this filter */
  users_NONE?: InputMaybe<App_UserWhere>;
  /** Return App_Services where one of the related App_Users match this filter */
  users_SINGLE?: InputMaybe<App_UserWhere>;
  /** Return App_Services where some of the related App_Users match this filter */
  users_SOME?: InputMaybe<App_UserWhere>;
  /** @deprecated Use `botsConnection_SOME` instead. */
  botsConnection?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** @deprecated Use `botsConnection_NONE` instead. */
  botsConnection_NOT?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** Return App_Services where all of the related App_ServiceBotsConnections match this filter */
  botsConnection_ALL?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** Return App_Services where none of the related App_ServiceBotsConnections match this filter */
  botsConnection_NONE?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** Return App_Services where one of the related App_ServiceBotsConnections match this filter */
  botsConnection_SINGLE?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** Return App_Services where some of the related App_ServiceBotsConnections match this filter */
  botsConnection_SOME?: InputMaybe<App_ServiceBotsConnectionWhere>;
  /** @deprecated Use `usersConnection_SOME` instead. */
  usersConnection?: InputMaybe<App_ServiceUsersConnectionWhere>;
  /** @deprecated Use `usersConnection_NONE` instead. */
  usersConnection_NOT?: InputMaybe<App_ServiceUsersConnectionWhere>;
  /** Return App_Services where all of the related App_ServiceUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<App_ServiceUsersConnectionWhere>;
  /** Return App_Services where none of the related App_ServiceUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<App_ServiceUsersConnectionWhere>;
  /** Return App_Services where one of the related App_ServiceUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<App_ServiceUsersConnectionWhere>;
  /** Return App_Services where some of the related App_ServiceUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<App_ServiceUsersConnectionWhere>;
};

export type App_Tag_RecipientWhere = {
  App_Bot?: InputMaybe<App_BotWhere>;
  App_User?: InputMaybe<App_UserWhere>;
};

export type App_UserConnectInput = {
  service?: InputMaybe<App_UserServiceConnectFieldInput>;
};

export type App_UserConnectWhere = {
  node: App_UserWhere;
};

export type App_UserCreateInput = {
  username: Scalars["String"]["input"];
  service?: InputMaybe<App_UserServiceFieldInput>;
};

export type App_UserDeleteInput = {
  service?: InputMaybe<App_UserServiceDeleteFieldInput>;
};

export type App_UserDisconnectInput = {
  service?: InputMaybe<App_UserServiceDisconnectFieldInput>;
};

export type App_UserOptions = {
  /** Specify one or more App_UserSort objects to sort AppUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<App_UserSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_UserRelationInput = {
  service?: InputMaybe<App_UserServiceCreateFieldInput>;
};

export type App_UserServiceAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<App_UserServiceAggregateInput>>;
  OR?: InputMaybe<Array<App_UserServiceAggregateInput>>;
  NOT?: InputMaybe<App_UserServiceAggregateInput>;
  node?: InputMaybe<App_UserServiceNodeAggregationWhereInput>;
};

export type App_UserServiceConnectFieldInput = {
  where?: InputMaybe<App_ServiceConnectWhere>;
  connect?: InputMaybe<App_ServiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type App_UserServiceConnectionSort = {
  node?: InputMaybe<App_ServiceSort>;
};

export type App_UserServiceConnectionWhere = {
  AND?: InputMaybe<Array<App_UserServiceConnectionWhere>>;
  OR?: InputMaybe<Array<App_UserServiceConnectionWhere>>;
  NOT?: InputMaybe<App_UserServiceConnectionWhere>;
  node?: InputMaybe<App_ServiceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<App_ServiceWhere>;
};

export type App_UserServiceCreateFieldInput = {
  node: App_ServiceCreateInput;
};

export type App_UserServiceDeleteFieldInput = {
  where?: InputMaybe<App_UserServiceConnectionWhere>;
  delete?: InputMaybe<App_ServiceDeleteInput>;
};

export type App_UserServiceDisconnectFieldInput = {
  where?: InputMaybe<App_UserServiceConnectionWhere>;
  disconnect?: InputMaybe<App_ServiceDisconnectInput>;
};

export type App_UserServiceFieldInput = {
  create?: InputMaybe<App_UserServiceCreateFieldInput>;
  connect?: InputMaybe<App_UserServiceConnectFieldInput>;
};

export type App_UserServiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<App_UserServiceNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<App_UserServiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<App_UserServiceNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type App_UserServiceUpdateConnectionInput = {
  node?: InputMaybe<App_ServiceUpdateInput>;
};

export type App_UserServiceUpdateFieldInput = {
  where?: InputMaybe<App_UserServiceConnectionWhere>;
  create?: InputMaybe<App_UserServiceCreateFieldInput>;
  connect?: InputMaybe<App_UserServiceConnectFieldInput>;
  update?: InputMaybe<App_UserServiceUpdateConnectionInput>;
  delete?: InputMaybe<App_UserServiceDeleteFieldInput>;
  disconnect?: InputMaybe<App_UserServiceDisconnectFieldInput>;
};

/** Fields to sort AppUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one App_UserSort object. */
export type App_UserSort = {
  id?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type App_UserUpdateInput = {
  username?: InputMaybe<Scalars["String"]["input"]>;
  service?: InputMaybe<App_UserServiceUpdateFieldInput>;
};

export type App_UserWhere = {
  OR?: InputMaybe<Array<App_UserWhere>>;
  AND?: InputMaybe<Array<App_UserWhere>>;
  NOT?: InputMaybe<App_UserWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["String"]["input"]>;
  username_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  username_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  username_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  username_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  service?: InputMaybe<App_ServiceWhere>;
  service_NOT?: InputMaybe<App_ServiceWhere>;
  serviceAggregate?: InputMaybe<App_UserServiceAggregateInput>;
  serviceConnection?: InputMaybe<App_UserServiceConnectionWhere>;
  serviceConnection_NOT?: InputMaybe<App_UserServiceConnectionWhere>;
};

export type QueryOptions = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface App_BotAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  endpoint?: StringAggregateInputNonNullable;
  username?: StringAggregateInputNonNullable;
  personName?: StringAggregateInputNonNullable;
}

export declare class App_BotModel {
  public find(args?: {
    where?: AppBotWhere;

    options?: AppBotOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AppBot[]>;
  public create(args: {
    input: AppBotCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAppBotsMutationResponse>;
  public update(args: {
    where?: AppBotWhere;
    update?: AppBotUpdateInput;
    connect?: AppBotConnectInput;
    disconnect?: AppBotDisconnectInput;
    create?: AppBotCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAppBotsMutationResponse>;
  public delete(args: {
    where?: AppBotWhere;
    delete?: AppBotDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AppBotWhere;

    aggregate: App_BotAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AppBotAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface App_ServiceAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
}

export declare class App_ServiceModel {
  public find(args?: {
    where?: AppServiceWhere;

    options?: AppServiceOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AppService[]>;
  public create(args: {
    input: AppServiceCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAppServicesMutationResponse>;
  public update(args: {
    where?: AppServiceWhere;
    update?: AppServiceUpdateInput;
    connect?: AppServiceConnectInput;
    disconnect?: AppServiceDisconnectInput;
    create?: AppServiceCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAppServicesMutationResponse>;
  public delete(args: {
    where?: AppServiceWhere;
    delete?: AppServiceDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AppServiceWhere;

    aggregate: App_ServiceAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AppServiceAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface App_UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  username?: StringAggregateInputNonNullable;
}

export declare class App_UserModel {
  public find(args?: {
    where?: AppUserWhere;

    options?: AppUserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AppUser[]>;
  public create(args: {
    input: AppUserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAppUsersMutationResponse>;
  public update(args: {
    where?: AppUserWhere;
    update?: AppUserUpdateInput;
    connect?: AppUserConnectInput;
    disconnect?: AppUserDisconnectInput;
    create?: AppUserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAppUsersMutationResponse>;
  public delete(args: {
    where?: AppUserWhere;
    delete?: AppUserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AppUserWhere;

    aggregate: App_UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AppUserAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface App_ConversationAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
}

export declare class App_ConversationModel {
  public find(args?: {
    where?: AppConversationWhere;

    options?: AppConversationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AppConversation[]>;
  public create(args: {
    input: AppConversationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAppConversationsMutationResponse>;
  public update(args: {
    where?: AppConversationWhere;
    update?: AppConversationUpdateInput;
    connect?: AppConversationConnectInput;
    disconnect?: AppConversationDisconnectInput;
    create?: AppConversationCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAppConversationsMutationResponse>;
  public delete(args: {
    where?: AppConversationWhere;
    delete?: AppConversationDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AppConversationWhere;

    aggregate: App_ConversationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AppConversationAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface App_MessageAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  from?: StringAggregateInputNonNullable;
  text?: StringAggregateInputNonNullable;
  timestamp?: StringAggregateInputNonNullable;
}

export declare class App_MessageModel {
  public find(args?: {
    where?: AppMessageWhere;

    options?: AppMessageOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AppMessage[]>;
  public create(args: {
    input: AppMessageCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAppMessagesMutationResponse>;
  public update(args: {
    where?: AppMessageWhere;
    update?: AppMessageUpdateInput;
    connect?: AppMessageConnectInput;
    disconnect?: AppMessageDisconnectInput;
    create?: AppMessageCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAppMessagesMutationResponse>;
  public delete(args: {
    where?: AppMessageWhere;
    delete?: AppMessageDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AppMessageWhere;

    aggregate: App_MessageAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AppMessageAggregateSelection>;
}

export interface ModelMap {
  App_Bot: App_BotModel;
  App_Service: App_ServiceModel;
  App_User: App_UserModel;
  App_Conversation: App_ConversationModel;
  App_Message: App_MessageModel;
}
