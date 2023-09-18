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
  publicBots?: Maybe<Array<Maybe<Bot>>>;
  bots: Array<Bot>;
  botsConnection: BotsConnection;
  botsAggregate: BotAggregateSelection;
  services: Array<Service>;
  servicesConnection: ServicesConnection;
  servicesAggregate: ServiceAggregateSelection;
  evaluationItems: Array<EvaluationItem>;
  evaluationItemsConnection: EvaluationItemsConnection;
  evaluationItemsAggregate: EvaluationItemAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  emulees: Array<Emulee>;
  emuleesConnection: EmuleesConnection;
  emuleesAggregate: EmuleeAggregateSelection;
  conversations: Array<Conversation>;
  conversationsConnection: ConversationsConnection;
  conversationsAggregate: ConversationAggregateSelection;
  messages: Array<Message>;
  messagesConnection: MessagesConnection;
  messagesAggregate: MessageAggregateSelection;
};

export type QueryBotsArgs = {
  where?: InputMaybe<BotWhere>;
  options?: InputMaybe<BotOptions>;
};

export type QueryBotsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<BotWhere>;
  sort?: InputMaybe<Array<InputMaybe<BotSort>>>;
};

export type QueryBotsAggregateArgs = {
  where?: InputMaybe<BotWhere>;
};

export type QueryServicesArgs = {
  where?: InputMaybe<ServiceWhere>;
  options?: InputMaybe<ServiceOptions>;
};

export type QueryServicesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ServiceWhere>;
  sort?: InputMaybe<Array<InputMaybe<ServiceSort>>>;
};

export type QueryServicesAggregateArgs = {
  where?: InputMaybe<ServiceWhere>;
};

export type QueryEvaluationItemsArgs = {
  where?: InputMaybe<EvaluationItemWhere>;
  options?: InputMaybe<EvaluationItemOptions>;
};

export type QueryEvaluationItemsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EvaluationItemWhere>;
  sort?: InputMaybe<Array<InputMaybe<EvaluationItemSort>>>;
};

export type QueryEvaluationItemsAggregateArgs = {
  where?: InputMaybe<EvaluationItemWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryEmuleesArgs = {
  where?: InputMaybe<EmuleeWhere>;
  options?: InputMaybe<EmuleeOptions>;
};

export type QueryEmuleesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EmuleeWhere>;
  sort?: InputMaybe<Array<InputMaybe<EmuleeSort>>>;
};

export type QueryEmuleesAggregateArgs = {
  where?: InputMaybe<EmuleeWhere>;
};

export type QueryConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  options?: InputMaybe<ConversationOptions>;
};

export type QueryConversationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ConversationWhere>;
  sort?: InputMaybe<Array<InputMaybe<ConversationSort>>>;
};

export type QueryConversationsAggregateArgs = {
  where?: InputMaybe<ConversationWhere>;
};

export type QueryMessagesArgs = {
  where?: InputMaybe<MessageWhere>;
  options?: InputMaybe<MessageOptions>;
};

export type QueryMessagesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MessageWhere>;
  sort?: InputMaybe<Array<InputMaybe<MessageSort>>>;
};

export type QueryMessagesAggregateArgs = {
  where?: InputMaybe<MessageWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  addBot?: Maybe<Bot>;
  sendMessage?: Maybe<Message>;
  createConversation?: Maybe<Conversation>;
  createBots: CreateBotsMutationResponse;
  deleteBots: DeleteInfo;
  updateBots: UpdateBotsMutationResponse;
  createServices: CreateServicesMutationResponse;
  deleteServices: DeleteInfo;
  updateServices: UpdateServicesMutationResponse;
  createEvaluationItems: CreateEvaluationItemsMutationResponse;
  deleteEvaluationItems: DeleteInfo;
  updateEvaluationItems: UpdateEvaluationItemsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createEmulees: CreateEmuleesMutationResponse;
  deleteEmulees: DeleteInfo;
  updateEmulees: UpdateEmuleesMutationResponse;
  createConversations: CreateConversationsMutationResponse;
  deleteConversations: DeleteInfo;
  updateConversations: UpdateConversationsMutationResponse;
  createMessages: CreateMessagesMutationResponse;
  deleteMessages: DeleteInfo;
  updateMessages: UpdateMessagesMutationResponse;
};

export type MutationAddBotArgs = {
  input?: InputMaybe<BotInput>;
};

export type MutationSendMessageArgs = {
  input?: InputMaybe<MessageInput>;
};

export type MutationCreateConversationArgs = {
  input?: InputMaybe<ConversationInput>;
};

export type MutationCreateBotsArgs = {
  input: Array<BotCreateInput>;
};

export type MutationDeleteBotsArgs = {
  where?: InputMaybe<BotWhere>;
  delete?: InputMaybe<BotDeleteInput>;
};

export type MutationUpdateBotsArgs = {
  where?: InputMaybe<BotWhere>;
  update?: InputMaybe<BotUpdateInput>;
  connect?: InputMaybe<BotConnectInput>;
  disconnect?: InputMaybe<BotDisconnectInput>;
  create?: InputMaybe<BotRelationInput>;
  delete?: InputMaybe<BotDeleteInput>;
  connectOrCreate?: InputMaybe<BotConnectOrCreateInput>;
};

export type MutationCreateServicesArgs = {
  input: Array<ServiceCreateInput>;
};

export type MutationDeleteServicesArgs = {
  where?: InputMaybe<ServiceWhere>;
  delete?: InputMaybe<ServiceDeleteInput>;
};

export type MutationUpdateServicesArgs = {
  where?: InputMaybe<ServiceWhere>;
  update?: InputMaybe<ServiceUpdateInput>;
  connect?: InputMaybe<ServiceConnectInput>;
  disconnect?: InputMaybe<ServiceDisconnectInput>;
  create?: InputMaybe<ServiceRelationInput>;
  delete?: InputMaybe<ServiceDeleteInput>;
};

export type MutationCreateEvaluationItemsArgs = {
  input: Array<EvaluationItemCreateInput>;
};

export type MutationDeleteEvaluationItemsArgs = {
  where?: InputMaybe<EvaluationItemWhere>;
};

export type MutationUpdateEvaluationItemsArgs = {
  where?: InputMaybe<EvaluationItemWhere>;
  update?: InputMaybe<EvaluationItemUpdateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationCreateEmuleesArgs = {
  input: Array<EmuleeCreateInput>;
};

export type MutationDeleteEmuleesArgs = {
  where?: InputMaybe<EmuleeWhere>;
};

export type MutationUpdateEmuleesArgs = {
  where?: InputMaybe<EmuleeWhere>;
  update?: InputMaybe<EmuleeUpdateInput>;
};

export type MutationCreateConversationsArgs = {
  input: Array<ConversationCreateInput>;
};

export type MutationDeleteConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  delete?: InputMaybe<ConversationDeleteInput>;
};

export type MutationUpdateConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  update?: InputMaybe<ConversationUpdateInput>;
  connect?: InputMaybe<ConversationConnectInput>;
  disconnect?: InputMaybe<ConversationDisconnectInput>;
  create?: InputMaybe<ConversationRelationInput>;
  delete?: InputMaybe<ConversationDeleteInput>;
  connectOrCreate?: InputMaybe<ConversationConnectOrCreateInput>;
};

export type MutationCreateMessagesArgs = {
  input: Array<MessageCreateInput>;
};

export type MutationDeleteMessagesArgs = {
  where?: InputMaybe<MessageWhere>;
  delete?: InputMaybe<MessageDeleteInput>;
};

export type MutationUpdateMessagesArgs = {
  where?: InputMaybe<MessageWhere>;
  update?: InputMaybe<MessageUpdateInput>;
  connect?: InputMaybe<MessageConnectInput>;
  disconnect?: InputMaybe<MessageDisconnectInput>;
  create?: InputMaybe<MessageRelationInput>;
  delete?: InputMaybe<MessageDeleteInput>;
  connectOrCreate?: InputMaybe<MessageConnectOrCreateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Tag_Recipient = Bot | User;

export type Bot = {
  __typename?: "Bot";
  id: Scalars["ID"]["output"];
  endpoint: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
  personName: Scalars["String"]["output"];
  services: Array<Service>;
  servicesAggregate?: Maybe<BotServiceServicesAggregationSelection>;
  conversations: Array<Conversation>;
  conversationsAggregate?: Maybe<BotConversationConversationsAggregationSelection>;
  registeredBy: User;
  registeredByAggregate?: Maybe<BotUserRegisteredByAggregationSelection>;
  servicesConnection: BotServicesConnection;
  conversationsConnection: BotConversationsConnection;
  registeredByConnection: BotRegisteredByConnection;
};

export type BotServicesArgs = {
  where?: InputMaybe<ServiceWhere>;
  options?: InputMaybe<ServiceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotServicesAggregateArgs = {
  where?: InputMaybe<ServiceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  options?: InputMaybe<ConversationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotConversationsAggregateArgs = {
  where?: InputMaybe<ConversationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotRegisteredByArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotRegisteredByAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BotServicesConnectionArgs = {
  where?: InputMaybe<BotServicesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<BotServicesConnectionSort>>;
};

export type BotConversationsConnectionArgs = {
  where?: InputMaybe<BotConversationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<BotConversationsConnectionSort>>;
};

export type BotRegisteredByConnectionArgs = {
  where?: InputMaybe<BotRegisteredByConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<BotRegisteredByConnectionSort>>;
};

export type BotAggregateSelection = {
  __typename?: "BotAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type BotConversationConversationsAggregationSelection = {
  __typename?: "BotConversationConversationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BotConversationConversationsNodeAggregateSelection>;
};

export type BotConversationConversationsNodeAggregateSelection = {
  __typename?: "BotConversationConversationsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
};

export type BotConversationsConnection = {
  __typename?: "BotConversationsConnection";
  edges: Array<BotConversationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type BotConversationsRelationship = {
  __typename?: "BotConversationsRelationship";
  cursor: Scalars["String"]["output"];
  node: Conversation;
};

export type BotEdge = {
  __typename?: "BotEdge";
  cursor: Scalars["String"]["output"];
  node: Bot;
};

export type BotRegisteredByConnection = {
  __typename?: "BotRegisteredByConnection";
  edges: Array<BotRegisteredByRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type BotRegisteredByRelationship = {
  __typename?: "BotRegisteredByRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type BotsConnection = {
  __typename?: "BotsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<BotEdge>;
};

export type BotServicesConnection = {
  __typename?: "BotServicesConnection";
  edges: Array<BotServicesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type BotServiceServicesAggregationSelection = {
  __typename?: "BotServiceServicesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BotServiceServicesNodeAggregateSelection>;
};

export type BotServiceServicesNodeAggregateSelection = {
  __typename?: "BotServiceServicesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type BotServicesRelationship = {
  __typename?: "BotServicesRelationship";
  cursor: Scalars["String"]["output"];
  node: Service;
};

export type BotUserRegisteredByAggregationSelection = {
  __typename?: "BotUserRegisteredByAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BotUserRegisteredByNodeAggregateSelection>;
};

export type BotUserRegisteredByNodeAggregateSelection = {
  __typename?: "BotUserRegisteredByNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  apiKey: StringAggregateSelectionNonNullable;
};

export type Conversation = {
  __typename?: "Conversation";
  id: Scalars["ID"]["output"];
  messages: Array<Message>;
  messagesAggregate?: Maybe<ConversationMessageMessagesAggregationSelection>;
  bots: Array<Bot>;
  botsAggregate?: Maybe<ConversationBotBotsAggregationSelection>;
  users: Array<User>;
  usersAggregate?: Maybe<ConversationUserUsersAggregationSelection>;
  owner: User;
  ownerAggregate?: Maybe<ConversationUserOwnerAggregationSelection>;
  service?: Maybe<Service>;
  serviceAggregate?: Maybe<ConversationServiceServiceAggregationSelection>;
  messagesConnection: ConversationMessagesConnection;
  botsConnection: ConversationBotsConnection;
  usersConnection: ConversationUsersConnection;
  ownerConnection: ConversationOwnerConnection;
  serviceConnection: ConversationServiceConnection;
};

export type ConversationMessagesArgs = {
  where?: InputMaybe<MessageWhere>;
  options?: InputMaybe<MessageOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationMessagesAggregateArgs = {
  where?: InputMaybe<MessageWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationBotsArgs = {
  where?: InputMaybe<BotWhere>;
  options?: InputMaybe<BotOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationBotsAggregateArgs = {
  where?: InputMaybe<BotWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationOwnerArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationOwnerAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationServiceArgs = {
  where?: InputMaybe<ServiceWhere>;
  options?: InputMaybe<ServiceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationServiceAggregateArgs = {
  where?: InputMaybe<ServiceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ConversationMessagesConnectionArgs = {
  where?: InputMaybe<ConversationMessagesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ConversationMessagesConnectionSort>>;
};

export type ConversationBotsConnectionArgs = {
  where?: InputMaybe<ConversationBotsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ConversationBotsConnectionSort>>;
};

export type ConversationUsersConnectionArgs = {
  where?: InputMaybe<ConversationUsersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ConversationUsersConnectionSort>>;
};

export type ConversationOwnerConnectionArgs = {
  where?: InputMaybe<ConversationOwnerConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ConversationOwnerConnectionSort>>;
};

export type ConversationServiceConnectionArgs = {
  where?: InputMaybe<ConversationServiceConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ConversationServiceConnectionSort>>;
};

export type ConversationAggregateSelection = {
  __typename?: "ConversationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
};

export type ConversationBotBotsAggregationSelection = {
  __typename?: "ConversationBotBotsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ConversationBotBotsNodeAggregateSelection>;
};

export type ConversationBotBotsNodeAggregateSelection = {
  __typename?: "ConversationBotBotsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type ConversationBotsConnection = {
  __typename?: "ConversationBotsConnection";
  edges: Array<ConversationBotsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ConversationBotsRelationship = {
  __typename?: "ConversationBotsRelationship";
  cursor: Scalars["String"]["output"];
  node: Bot;
};

export type ConversationEdge = {
  __typename?: "ConversationEdge";
  cursor: Scalars["String"]["output"];
  node: Conversation;
};

export type ConversationMessageMessagesAggregationSelection = {
  __typename?: "ConversationMessageMessagesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ConversationMessageMessagesNodeAggregateSelection>;
};

export type ConversationMessageMessagesNodeAggregateSelection = {
  __typename?: "ConversationMessageMessagesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  from: StringAggregateSelectionNonNullable;
  text: StringAggregateSelectionNonNullable;
  timestamp: StringAggregateSelectionNonNullable;
};

export type ConversationMessagesConnection = {
  __typename?: "ConversationMessagesConnection";
  edges: Array<ConversationMessagesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ConversationMessagesRelationship = {
  __typename?: "ConversationMessagesRelationship";
  cursor: Scalars["String"]["output"];
  node: Message;
};

export type ConversationOwnerConnection = {
  __typename?: "ConversationOwnerConnection";
  edges: Array<ConversationOwnerRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ConversationOwnerRelationship = {
  __typename?: "ConversationOwnerRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type ConversationsConnection = {
  __typename?: "ConversationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ConversationEdge>;
};

export type ConversationServiceConnection = {
  __typename?: "ConversationServiceConnection";
  edges: Array<ConversationServiceRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ConversationServiceRelationship = {
  __typename?: "ConversationServiceRelationship";
  cursor: Scalars["String"]["output"];
  node: Service;
};

export type ConversationServiceServiceAggregationSelection = {
  __typename?: "ConversationServiceServiceAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ConversationServiceServiceNodeAggregateSelection>;
};

export type ConversationServiceServiceNodeAggregateSelection = {
  __typename?: "ConversationServiceServiceNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ConversationUserOwnerAggregationSelection = {
  __typename?: "ConversationUserOwnerAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ConversationUserOwnerNodeAggregateSelection>;
};

export type ConversationUserOwnerNodeAggregateSelection = {
  __typename?: "ConversationUserOwnerNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  apiKey: StringAggregateSelectionNonNullable;
};

export type ConversationUsersConnection = {
  __typename?: "ConversationUsersConnection";
  edges: Array<ConversationUsersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ConversationUsersRelationship = {
  __typename?: "ConversationUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type ConversationUserUsersAggregationSelection = {
  __typename?: "ConversationUserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ConversationUserUsersNodeAggregateSelection>;
};

export type ConversationUserUsersNodeAggregateSelection = {
  __typename?: "ConversationUserUsersNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  apiKey: StringAggregateSelectionNonNullable;
};

export type CreateBotsMutationResponse = {
  __typename?: "CreateBotsMutationResponse";
  info: CreateInfo;
  bots: Array<Bot>;
};

export type CreateConversationsMutationResponse = {
  __typename?: "CreateConversationsMutationResponse";
  info: CreateInfo;
  conversations: Array<Conversation>;
};

export type CreateEmuleesMutationResponse = {
  __typename?: "CreateEmuleesMutationResponse";
  info: CreateInfo;
  emulees: Array<Emulee>;
};

export type CreateEvaluationItemsMutationResponse = {
  __typename?: "CreateEvaluationItemsMutationResponse";
  info: CreateInfo;
  evaluationItems: Array<EvaluationItem>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMessagesMutationResponse = {
  __typename?: "CreateMessagesMutationResponse";
  info: CreateInfo;
  messages: Array<Message>;
};

export type CreateServicesMutationResponse = {
  __typename?: "CreateServicesMutationResponse";
  info: CreateInfo;
  services: Array<Service>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type Emulee = {
  __typename?: "Emulee";
  name: Scalars["String"]["output"];
};

export type EmuleeAggregateSelection = {
  __typename?: "EmuleeAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
};

export type EmuleeEdge = {
  __typename?: "EmuleeEdge";
  cursor: Scalars["String"]["output"];
  node: Emulee;
};

export type EmuleesConnection = {
  __typename?: "EmuleesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EmuleeEdge>;
};

export type EvaluationItem = {
  __typename?: "EvaluationItem";
  id?: Maybe<Scalars["ID"]["output"]>;
  question?: Maybe<Scalars["String"]["output"]>;
  originalAnswer?: Maybe<Scalars["String"]["output"]>;
  originalVector?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  emsAnswers?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  distances?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
};

export type EvaluationItemAggregateSelection = {
  __typename?: "EvaluationItemAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNullable;
  question: StringAggregateSelectionNullable;
  originalAnswer: StringAggregateSelectionNullable;
};

export type EvaluationItemEdge = {
  __typename?: "EvaluationItemEdge";
  cursor: Scalars["String"]["output"];
  node: EvaluationItem;
};

export type EvaluationItemsConnection = {
  __typename?: "EvaluationItemsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EvaluationItemEdge>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"]["output"];
  longest: Scalars["ID"]["output"];
};

export type IdAggregateSelectionNullable = {
  __typename?: "IDAggregateSelectionNullable";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"]["output"];
  from: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
  timestamp: Scalars["String"]["output"];
  tagged: Array<Tag_Recipient>;
  taggedConnection: MessageTaggedConnection;
};

export type MessageTaggedArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<Tag_RecipientWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MessageTaggedConnectionArgs = {
  where?: InputMaybe<MessageTaggedConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MessageAggregateSelection = {
  __typename?: "MessageAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  from: StringAggregateSelectionNonNullable;
  text: StringAggregateSelectionNonNullable;
  timestamp: StringAggregateSelectionNonNullable;
};

export type MessageEdge = {
  __typename?: "MessageEdge";
  cursor: Scalars["String"]["output"];
  node: Message;
};

export type MessagesConnection = {
  __typename?: "MessagesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MessageEdge>;
};

export type MessageTaggedConnection = {
  __typename?: "MessageTaggedConnection";
  edges: Array<MessageTaggedRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MessageTaggedRelationship = {
  __typename?: "MessageTaggedRelationship";
  cursor: Scalars["String"]["output"];
  node: Tag_Recipient;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Service = {
  __typename?: "Service";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  bots: Array<Bot>;
  botsAggregate?: Maybe<ServiceBotBotsAggregationSelection>;
  botsConnection: ServiceBotsConnection;
};

export type ServiceBotsArgs = {
  where?: InputMaybe<BotWhere>;
  options?: InputMaybe<BotOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceBotsAggregateArgs = {
  where?: InputMaybe<BotWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ServiceBotsConnectionArgs = {
  where?: InputMaybe<ServiceBotsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ServiceBotsConnectionSort>>;
};

export type ServiceAggregateSelection = {
  __typename?: "ServiceAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ServiceBotBotsAggregationSelection = {
  __typename?: "ServiceBotBotsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ServiceBotBotsNodeAggregateSelection>;
};

export type ServiceBotBotsNodeAggregateSelection = {
  __typename?: "ServiceBotBotsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type ServiceBotsConnection = {
  __typename?: "ServiceBotsConnection";
  edges: Array<ServiceBotsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ServiceBotsRelationship = {
  __typename?: "ServiceBotsRelationship";
  cursor: Scalars["String"]["output"];
  node: Bot;
};

export type ServiceEdge = {
  __typename?: "ServiceEdge";
  cursor: Scalars["String"]["output"];
  node: Service;
};

export type ServicesConnection = {
  __typename?: "ServicesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ServiceEdge>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"]["output"];
  longest: Scalars["String"]["output"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateBotsMutationResponse = {
  __typename?: "UpdateBotsMutationResponse";
  info: UpdateInfo;
  bots: Array<Bot>;
};

export type UpdateConversationsMutationResponse = {
  __typename?: "UpdateConversationsMutationResponse";
  info: UpdateInfo;
  conversations: Array<Conversation>;
};

export type UpdateEmuleesMutationResponse = {
  __typename?: "UpdateEmuleesMutationResponse";
  info: UpdateInfo;
  emulees: Array<Emulee>;
};

export type UpdateEvaluationItemsMutationResponse = {
  __typename?: "UpdateEvaluationItemsMutationResponse";
  info: UpdateInfo;
  evaluationItems: Array<EvaluationItem>;
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

export type UpdateMessagesMutationResponse = {
  __typename?: "UpdateMessagesMutationResponse";
  info: UpdateInfo;
  messages: Array<Message>;
};

export type UpdateServicesMutationResponse = {
  __typename?: "UpdateServicesMutationResponse";
  info: UpdateInfo;
  services: Array<Service>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  apiKey: Scalars["String"]["output"];
  bots: Array<Bot>;
  botsAggregate?: Maybe<UserBotBotsAggregationSelection>;
  conversations: Array<Conversation>;
  conversationsAggregate?: Maybe<UserConversationConversationsAggregationSelection>;
  ownedConversations: Array<Conversation>;
  ownedConversationsAggregate?: Maybe<UserConversationOwnedConversationsAggregationSelection>;
  botsConnection: UserBotsConnection;
  conversationsConnection: UserConversationsConnection;
  ownedConversationsConnection: UserOwnedConversationsConnection;
};

export type UserBotsArgs = {
  where?: InputMaybe<BotWhere>;
  options?: InputMaybe<BotOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserBotsAggregateArgs = {
  where?: InputMaybe<BotWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  options?: InputMaybe<ConversationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserConversationsAggregateArgs = {
  where?: InputMaybe<ConversationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserOwnedConversationsArgs = {
  where?: InputMaybe<ConversationWhere>;
  options?: InputMaybe<ConversationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserOwnedConversationsAggregateArgs = {
  where?: InputMaybe<ConversationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserBotsConnectionArgs = {
  where?: InputMaybe<UserBotsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserBotsConnectionSort>>;
};

export type UserConversationsConnectionArgs = {
  where?: InputMaybe<UserConversationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserConversationsConnectionSort>>;
};

export type UserOwnedConversationsConnectionArgs = {
  where?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserOwnedConversationsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  apiKey: StringAggregateSelectionNonNullable;
};

export type UserBotBotsAggregationSelection = {
  __typename?: "UserBotBotsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserBotBotsNodeAggregateSelection>;
};

export type UserBotBotsNodeAggregateSelection = {
  __typename?: "UserBotBotsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  endpoint: StringAggregateSelectionNonNullable;
  username: StringAggregateSelectionNonNullable;
  personName: StringAggregateSelectionNonNullable;
};

export type UserBotsConnection = {
  __typename?: "UserBotsConnection";
  edges: Array<UserBotsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserBotsRelationship = {
  __typename?: "UserBotsRelationship";
  cursor: Scalars["String"]["output"];
  node: Bot;
};

export type UserConversationConversationsAggregationSelection = {
  __typename?: "UserConversationConversationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserConversationConversationsNodeAggregateSelection>;
};

export type UserConversationConversationsNodeAggregateSelection = {
  __typename?: "UserConversationConversationsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
};

export type UserConversationOwnedConversationsAggregationSelection = {
  __typename?: "UserConversationOwnedConversationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserConversationOwnedConversationsNodeAggregateSelection>;
};

export type UserConversationOwnedConversationsNodeAggregateSelection = {
  __typename?: "UserConversationOwnedConversationsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
};

export type UserConversationsConnection = {
  __typename?: "UserConversationsConnection";
  edges: Array<UserConversationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserConversationsRelationship = {
  __typename?: "UserConversationsRelationship";
  cursor: Scalars["String"]["output"];
  node: Conversation;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserOwnedConversationsConnection = {
  __typename?: "UserOwnedConversationsConnection";
  edges: Array<UserOwnedConversationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserOwnedConversationsRelationship = {
  __typename?: "UserOwnedConversationsRelationship";
  cursor: Scalars["String"]["output"];
  node: Conversation;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type BotConnectInput = {
  services?: InputMaybe<Array<BotServicesConnectFieldInput>>;
  conversations?: InputMaybe<Array<BotConversationsConnectFieldInput>>;
  registeredBy?: InputMaybe<BotRegisteredByConnectFieldInput>;
};

export type BotConnectOrCreateInput = {
  registeredBy?: InputMaybe<BotRegisteredByConnectOrCreateFieldInput>;
};

export type BotConnectWhere = {
  node: BotWhere;
};

export type BotConversationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<BotConversationsAggregateInput>>;
  OR?: InputMaybe<Array<BotConversationsAggregateInput>>;
  NOT?: InputMaybe<BotConversationsAggregateInput>;
  node?: InputMaybe<BotConversationsNodeAggregationWhereInput>;
};

export type BotConversationsConnectFieldInput = {
  where?: InputMaybe<ConversationConnectWhere>;
  connect?: InputMaybe<Array<ConversationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type BotConversationsConnectionSort = {
  node?: InputMaybe<ConversationSort>;
};

export type BotConversationsConnectionWhere = {
  AND?: InputMaybe<Array<BotConversationsConnectionWhere>>;
  OR?: InputMaybe<Array<BotConversationsConnectionWhere>>;
  NOT?: InputMaybe<BotConversationsConnectionWhere>;
  node?: InputMaybe<ConversationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ConversationWhere>;
};

export type BotConversationsCreateFieldInput = {
  node: ConversationCreateInput;
};

export type BotConversationsDeleteFieldInput = {
  where?: InputMaybe<BotConversationsConnectionWhere>;
  delete?: InputMaybe<ConversationDeleteInput>;
};

export type BotConversationsDisconnectFieldInput = {
  where?: InputMaybe<BotConversationsConnectionWhere>;
  disconnect?: InputMaybe<ConversationDisconnectInput>;
};

export type BotConversationsFieldInput = {
  create?: InputMaybe<Array<BotConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<BotConversationsConnectFieldInput>>;
};

export type BotConversationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BotConversationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BotConversationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BotConversationsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BotConversationsUpdateConnectionInput = {
  node?: InputMaybe<ConversationUpdateInput>;
};

export type BotConversationsUpdateFieldInput = {
  where?: InputMaybe<BotConversationsConnectionWhere>;
  create?: InputMaybe<Array<BotConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<BotConversationsConnectFieldInput>>;
  update?: InputMaybe<BotConversationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<BotConversationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BotConversationsDisconnectFieldInput>>;
};

export type BotCreateInput = {
  endpoint: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
  personName: Scalars["String"]["input"];
  services?: InputMaybe<BotServicesFieldInput>;
  conversations?: InputMaybe<BotConversationsFieldInput>;
  registeredBy?: InputMaybe<BotRegisteredByFieldInput>;
};

export type BotDeleteInput = {
  services?: InputMaybe<Array<BotServicesDeleteFieldInput>>;
  conversations?: InputMaybe<Array<BotConversationsDeleteFieldInput>>;
  registeredBy?: InputMaybe<BotRegisteredByDeleteFieldInput>;
};

export type BotDisconnectInput = {
  services?: InputMaybe<Array<BotServicesDisconnectFieldInput>>;
  conversations?: InputMaybe<Array<BotConversationsDisconnectFieldInput>>;
  registeredBy?: InputMaybe<BotRegisteredByDisconnectFieldInput>;
};

export type BotInput = {
  endpoint: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
  personName: Scalars["String"]["input"];
  services: Array<ServiceInput>;
};

export type BotOptions = {
  /** Specify one or more BotSort objects to sort Bots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BotSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BotRegisteredByAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<BotRegisteredByAggregateInput>>;
  OR?: InputMaybe<Array<BotRegisteredByAggregateInput>>;
  NOT?: InputMaybe<BotRegisteredByAggregateInput>;
  node?: InputMaybe<BotRegisteredByNodeAggregationWhereInput>;
};

export type BotRegisteredByConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type BotRegisteredByConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type BotRegisteredByConnectionWhere = {
  AND?: InputMaybe<Array<BotRegisteredByConnectionWhere>>;
  OR?: InputMaybe<Array<BotRegisteredByConnectionWhere>>;
  NOT?: InputMaybe<BotRegisteredByConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type BotRegisteredByConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: BotRegisteredByConnectOrCreateFieldInputOnCreate;
};

export type BotRegisteredByConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type BotRegisteredByCreateFieldInput = {
  node: UserCreateInput;
};

export type BotRegisteredByDeleteFieldInput = {
  where?: InputMaybe<BotRegisteredByConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type BotRegisteredByDisconnectFieldInput = {
  where?: InputMaybe<BotRegisteredByConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type BotRegisteredByFieldInput = {
  connectOrCreate?: InputMaybe<BotRegisteredByConnectOrCreateFieldInput>;
  create?: InputMaybe<BotRegisteredByCreateFieldInput>;
  connect?: InputMaybe<BotRegisteredByConnectFieldInput>;
};

export type BotRegisteredByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BotRegisteredByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BotRegisteredByNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BotRegisteredByNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BotRegisteredByUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type BotRegisteredByUpdateFieldInput = {
  where?: InputMaybe<BotRegisteredByConnectionWhere>;
  connectOrCreate?: InputMaybe<BotRegisteredByConnectOrCreateFieldInput>;
  create?: InputMaybe<BotRegisteredByCreateFieldInput>;
  connect?: InputMaybe<BotRegisteredByConnectFieldInput>;
  update?: InputMaybe<BotRegisteredByUpdateConnectionInput>;
  delete?: InputMaybe<BotRegisteredByDeleteFieldInput>;
  disconnect?: InputMaybe<BotRegisteredByDisconnectFieldInput>;
};

export type BotRelationInput = {
  services?: InputMaybe<Array<BotServicesCreateFieldInput>>;
  conversations?: InputMaybe<Array<BotConversationsCreateFieldInput>>;
  registeredBy?: InputMaybe<BotRegisteredByCreateFieldInput>;
};

export type BotServicesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<BotServicesAggregateInput>>;
  OR?: InputMaybe<Array<BotServicesAggregateInput>>;
  NOT?: InputMaybe<BotServicesAggregateInput>;
  node?: InputMaybe<BotServicesNodeAggregationWhereInput>;
};

export type BotServicesConnectFieldInput = {
  where?: InputMaybe<ServiceConnectWhere>;
  connect?: InputMaybe<Array<ServiceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type BotServicesConnectionSort = {
  node?: InputMaybe<ServiceSort>;
};

export type BotServicesConnectionWhere = {
  AND?: InputMaybe<Array<BotServicesConnectionWhere>>;
  OR?: InputMaybe<Array<BotServicesConnectionWhere>>;
  NOT?: InputMaybe<BotServicesConnectionWhere>;
  node?: InputMaybe<ServiceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ServiceWhere>;
};

export type BotServicesCreateFieldInput = {
  node: ServiceCreateInput;
};

export type BotServicesDeleteFieldInput = {
  where?: InputMaybe<BotServicesConnectionWhere>;
  delete?: InputMaybe<ServiceDeleteInput>;
};

export type BotServicesDisconnectFieldInput = {
  where?: InputMaybe<BotServicesConnectionWhere>;
  disconnect?: InputMaybe<ServiceDisconnectInput>;
};

export type BotServicesFieldInput = {
  create?: InputMaybe<Array<BotServicesCreateFieldInput>>;
  connect?: InputMaybe<Array<BotServicesConnectFieldInput>>;
};

export type BotServicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BotServicesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<BotServicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BotServicesNodeAggregationWhereInput>;
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

export type BotServicesUpdateConnectionInput = {
  node?: InputMaybe<ServiceUpdateInput>;
};

export type BotServicesUpdateFieldInput = {
  where?: InputMaybe<BotServicesConnectionWhere>;
  create?: InputMaybe<Array<BotServicesCreateFieldInput>>;
  connect?: InputMaybe<Array<BotServicesConnectFieldInput>>;
  update?: InputMaybe<BotServicesUpdateConnectionInput>;
  delete?: InputMaybe<Array<BotServicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BotServicesDisconnectFieldInput>>;
};

/** Fields to sort Bots by. The order in which sorts are applied is not guaranteed when specifying many fields in one BotSort object. */
export type BotSort = {
  id?: InputMaybe<SortDirection>;
  endpoint?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
  personName?: InputMaybe<SortDirection>;
};

export type BotUpdateInput = {
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  personName?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<Array<BotServicesUpdateFieldInput>>;
  conversations?: InputMaybe<Array<BotConversationsUpdateFieldInput>>;
  registeredBy?: InputMaybe<BotRegisteredByUpdateFieldInput>;
};

export type BotWhere = {
  OR?: InputMaybe<Array<BotWhere>>;
  AND?: InputMaybe<Array<BotWhere>>;
  NOT?: InputMaybe<BotWhere>;
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
  services?: InputMaybe<ServiceWhere>;
  /** @deprecated Use `services_NONE` instead. */
  services_NOT?: InputMaybe<ServiceWhere>;
  servicesAggregate?: InputMaybe<BotServicesAggregateInput>;
  /** Return Bots where all of the related Services match this filter */
  services_ALL?: InputMaybe<ServiceWhere>;
  /** Return Bots where none of the related Services match this filter */
  services_NONE?: InputMaybe<ServiceWhere>;
  /** Return Bots where one of the related Services match this filter */
  services_SINGLE?: InputMaybe<ServiceWhere>;
  /** Return Bots where some of the related Services match this filter */
  services_SOME?: InputMaybe<ServiceWhere>;
  /** @deprecated Use `conversations_SOME` instead. */
  conversations?: InputMaybe<ConversationWhere>;
  /** @deprecated Use `conversations_NONE` instead. */
  conversations_NOT?: InputMaybe<ConversationWhere>;
  conversationsAggregate?: InputMaybe<BotConversationsAggregateInput>;
  /** Return Bots where all of the related Conversations match this filter */
  conversations_ALL?: InputMaybe<ConversationWhere>;
  /** Return Bots where none of the related Conversations match this filter */
  conversations_NONE?: InputMaybe<ConversationWhere>;
  /** Return Bots where one of the related Conversations match this filter */
  conversations_SINGLE?: InputMaybe<ConversationWhere>;
  /** Return Bots where some of the related Conversations match this filter */
  conversations_SOME?: InputMaybe<ConversationWhere>;
  registeredBy?: InputMaybe<UserWhere>;
  registeredBy_NOT?: InputMaybe<UserWhere>;
  registeredByAggregate?: InputMaybe<BotRegisteredByAggregateInput>;
  /** @deprecated Use `servicesConnection_SOME` instead. */
  servicesConnection?: InputMaybe<BotServicesConnectionWhere>;
  /** @deprecated Use `servicesConnection_NONE` instead. */
  servicesConnection_NOT?: InputMaybe<BotServicesConnectionWhere>;
  /** Return Bots where all of the related BotServicesConnections match this filter */
  servicesConnection_ALL?: InputMaybe<BotServicesConnectionWhere>;
  /** Return Bots where none of the related BotServicesConnections match this filter */
  servicesConnection_NONE?: InputMaybe<BotServicesConnectionWhere>;
  /** Return Bots where one of the related BotServicesConnections match this filter */
  servicesConnection_SINGLE?: InputMaybe<BotServicesConnectionWhere>;
  /** Return Bots where some of the related BotServicesConnections match this filter */
  servicesConnection_SOME?: InputMaybe<BotServicesConnectionWhere>;
  /** @deprecated Use `conversationsConnection_SOME` instead. */
  conversationsConnection?: InputMaybe<BotConversationsConnectionWhere>;
  /** @deprecated Use `conversationsConnection_NONE` instead. */
  conversationsConnection_NOT?: InputMaybe<BotConversationsConnectionWhere>;
  /** Return Bots where all of the related BotConversationsConnections match this filter */
  conversationsConnection_ALL?: InputMaybe<BotConversationsConnectionWhere>;
  /** Return Bots where none of the related BotConversationsConnections match this filter */
  conversationsConnection_NONE?: InputMaybe<BotConversationsConnectionWhere>;
  /** Return Bots where one of the related BotConversationsConnections match this filter */
  conversationsConnection_SINGLE?: InputMaybe<BotConversationsConnectionWhere>;
  /** Return Bots where some of the related BotConversationsConnections match this filter */
  conversationsConnection_SOME?: InputMaybe<BotConversationsConnectionWhere>;
  registeredByConnection?: InputMaybe<BotRegisteredByConnectionWhere>;
  registeredByConnection_NOT?: InputMaybe<BotRegisteredByConnectionWhere>;
};

export type ConversationBotsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ConversationBotsAggregateInput>>;
  OR?: InputMaybe<Array<ConversationBotsAggregateInput>>;
  NOT?: InputMaybe<ConversationBotsAggregateInput>;
  node?: InputMaybe<ConversationBotsNodeAggregationWhereInput>;
};

export type ConversationBotsConnectFieldInput = {
  where?: InputMaybe<BotConnectWhere>;
  connect?: InputMaybe<Array<BotConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ConversationBotsConnectionSort = {
  node?: InputMaybe<BotSort>;
};

export type ConversationBotsConnectionWhere = {
  AND?: InputMaybe<Array<ConversationBotsConnectionWhere>>;
  OR?: InputMaybe<Array<ConversationBotsConnectionWhere>>;
  NOT?: InputMaybe<ConversationBotsConnectionWhere>;
  node?: InputMaybe<BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BotWhere>;
};

export type ConversationBotsCreateFieldInput = {
  node: BotCreateInput;
};

export type ConversationBotsDeleteFieldInput = {
  where?: InputMaybe<ConversationBotsConnectionWhere>;
  delete?: InputMaybe<BotDeleteInput>;
};

export type ConversationBotsDisconnectFieldInput = {
  where?: InputMaybe<ConversationBotsConnectionWhere>;
  disconnect?: InputMaybe<BotDisconnectInput>;
};

export type ConversationBotsFieldInput = {
  create?: InputMaybe<Array<ConversationBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationBotsConnectFieldInput>>;
};

export type ConversationBotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConversationBotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ConversationBotsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConversationBotsNodeAggregationWhereInput>;
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

export type ConversationBotsUpdateConnectionInput = {
  node?: InputMaybe<BotUpdateInput>;
};

export type ConversationBotsUpdateFieldInput = {
  where?: InputMaybe<ConversationBotsConnectionWhere>;
  create?: InputMaybe<Array<ConversationBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationBotsConnectFieldInput>>;
  update?: InputMaybe<ConversationBotsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ConversationBotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ConversationBotsDisconnectFieldInput>>;
};

export type ConversationConnectInput = {
  messages?: InputMaybe<Array<ConversationMessagesConnectFieldInput>>;
  bots?: InputMaybe<Array<ConversationBotsConnectFieldInput>>;
  users?: InputMaybe<Array<ConversationUsersConnectFieldInput>>;
  owner?: InputMaybe<ConversationOwnerConnectFieldInput>;
  service?: InputMaybe<ConversationServiceConnectFieldInput>;
};

export type ConversationConnectOrCreateInput = {
  users?: InputMaybe<Array<ConversationUsersConnectOrCreateFieldInput>>;
  owner?: InputMaybe<ConversationOwnerConnectOrCreateFieldInput>;
};

export type ConversationConnectWhere = {
  node: ConversationWhere;
};

export type ConversationCreateInput = {
  messages?: InputMaybe<ConversationMessagesFieldInput>;
  bots?: InputMaybe<ConversationBotsFieldInput>;
  users?: InputMaybe<ConversationUsersFieldInput>;
  owner?: InputMaybe<ConversationOwnerFieldInput>;
  service?: InputMaybe<ConversationServiceFieldInput>;
};

export type ConversationDeleteInput = {
  messages?: InputMaybe<Array<ConversationMessagesDeleteFieldInput>>;
  bots?: InputMaybe<Array<ConversationBotsDeleteFieldInput>>;
  users?: InputMaybe<Array<ConversationUsersDeleteFieldInput>>;
  owner?: InputMaybe<ConversationOwnerDeleteFieldInput>;
  service?: InputMaybe<ConversationServiceDeleteFieldInput>;
};

export type ConversationDisconnectInput = {
  messages?: InputMaybe<Array<ConversationMessagesDisconnectFieldInput>>;
  bots?: InputMaybe<Array<ConversationBotsDisconnectFieldInput>>;
  users?: InputMaybe<Array<ConversationUsersDisconnectFieldInput>>;
  owner?: InputMaybe<ConversationOwnerDisconnectFieldInput>;
  service?: InputMaybe<ConversationServiceDisconnectFieldInput>;
};

export type ConversationInput = {
  botId: Scalars["ID"]["input"];
  userId: Scalars["ID"]["input"];
};

export type ConversationMessagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ConversationMessagesAggregateInput>>;
  OR?: InputMaybe<Array<ConversationMessagesAggregateInput>>;
  NOT?: InputMaybe<ConversationMessagesAggregateInput>;
  node?: InputMaybe<ConversationMessagesNodeAggregationWhereInput>;
};

export type ConversationMessagesConnectFieldInput = {
  where?: InputMaybe<MessageConnectWhere>;
  connect?: InputMaybe<Array<MessageConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ConversationMessagesConnectionSort = {
  node?: InputMaybe<MessageSort>;
};

export type ConversationMessagesConnectionWhere = {
  AND?: InputMaybe<Array<ConversationMessagesConnectionWhere>>;
  OR?: InputMaybe<Array<ConversationMessagesConnectionWhere>>;
  NOT?: InputMaybe<ConversationMessagesConnectionWhere>;
  node?: InputMaybe<MessageWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MessageWhere>;
};

export type ConversationMessagesCreateFieldInput = {
  node: MessageCreateInput;
};

export type ConversationMessagesDeleteFieldInput = {
  where?: InputMaybe<ConversationMessagesConnectionWhere>;
  delete?: InputMaybe<MessageDeleteInput>;
};

export type ConversationMessagesDisconnectFieldInput = {
  where?: InputMaybe<ConversationMessagesConnectionWhere>;
  disconnect?: InputMaybe<MessageDisconnectInput>;
};

export type ConversationMessagesFieldInput = {
  create?: InputMaybe<Array<ConversationMessagesCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationMessagesConnectFieldInput>>;
};

export type ConversationMessagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConversationMessagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ConversationMessagesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConversationMessagesNodeAggregationWhereInput>;
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

export type ConversationMessagesUpdateConnectionInput = {
  node?: InputMaybe<MessageUpdateInput>;
};

export type ConversationMessagesUpdateFieldInput = {
  where?: InputMaybe<ConversationMessagesConnectionWhere>;
  create?: InputMaybe<Array<ConversationMessagesCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationMessagesConnectFieldInput>>;
  update?: InputMaybe<ConversationMessagesUpdateConnectionInput>;
  delete?: InputMaybe<Array<ConversationMessagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ConversationMessagesDisconnectFieldInput>>;
};

export type ConversationOptions = {
  /** Specify one or more ConversationSort objects to sort Conversations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ConversationSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConversationOwnerAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ConversationOwnerAggregateInput>>;
  OR?: InputMaybe<Array<ConversationOwnerAggregateInput>>;
  NOT?: InputMaybe<ConversationOwnerAggregateInput>;
  node?: InputMaybe<ConversationOwnerNodeAggregationWhereInput>;
};

export type ConversationOwnerConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ConversationOwnerConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type ConversationOwnerConnectionWhere = {
  AND?: InputMaybe<Array<ConversationOwnerConnectionWhere>>;
  OR?: InputMaybe<Array<ConversationOwnerConnectionWhere>>;
  NOT?: InputMaybe<ConversationOwnerConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type ConversationOwnerConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ConversationOwnerConnectOrCreateFieldInputOnCreate;
};

export type ConversationOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ConversationOwnerCreateFieldInput = {
  node: UserCreateInput;
};

export type ConversationOwnerDeleteFieldInput = {
  where?: InputMaybe<ConversationOwnerConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type ConversationOwnerDisconnectFieldInput = {
  where?: InputMaybe<ConversationOwnerConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type ConversationOwnerFieldInput = {
  connectOrCreate?: InputMaybe<ConversationOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<ConversationOwnerCreateFieldInput>;
  connect?: InputMaybe<ConversationOwnerConnectFieldInput>;
};

export type ConversationOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConversationOwnerNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ConversationOwnerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConversationOwnerNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConversationOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ConversationOwnerUpdateFieldInput = {
  where?: InputMaybe<ConversationOwnerConnectionWhere>;
  connectOrCreate?: InputMaybe<ConversationOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<ConversationOwnerCreateFieldInput>;
  connect?: InputMaybe<ConversationOwnerConnectFieldInput>;
  update?: InputMaybe<ConversationOwnerUpdateConnectionInput>;
  delete?: InputMaybe<ConversationOwnerDeleteFieldInput>;
  disconnect?: InputMaybe<ConversationOwnerDisconnectFieldInput>;
};

export type ConversationRelationInput = {
  messages?: InputMaybe<Array<ConversationMessagesCreateFieldInput>>;
  bots?: InputMaybe<Array<ConversationBotsCreateFieldInput>>;
  users?: InputMaybe<Array<ConversationUsersCreateFieldInput>>;
  owner?: InputMaybe<ConversationOwnerCreateFieldInput>;
  service?: InputMaybe<ConversationServiceCreateFieldInput>;
};

export type ConversationServiceAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ConversationServiceAggregateInput>>;
  OR?: InputMaybe<Array<ConversationServiceAggregateInput>>;
  NOT?: InputMaybe<ConversationServiceAggregateInput>;
  node?: InputMaybe<ConversationServiceNodeAggregationWhereInput>;
};

export type ConversationServiceConnectFieldInput = {
  where?: InputMaybe<ServiceConnectWhere>;
  connect?: InputMaybe<ServiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ConversationServiceConnectionSort = {
  node?: InputMaybe<ServiceSort>;
};

export type ConversationServiceConnectionWhere = {
  AND?: InputMaybe<Array<ConversationServiceConnectionWhere>>;
  OR?: InputMaybe<Array<ConversationServiceConnectionWhere>>;
  NOT?: InputMaybe<ConversationServiceConnectionWhere>;
  node?: InputMaybe<ServiceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ServiceWhere>;
};

export type ConversationServiceCreateFieldInput = {
  node: ServiceCreateInput;
};

export type ConversationServiceDeleteFieldInput = {
  where?: InputMaybe<ConversationServiceConnectionWhere>;
  delete?: InputMaybe<ServiceDeleteInput>;
};

export type ConversationServiceDisconnectFieldInput = {
  where?: InputMaybe<ConversationServiceConnectionWhere>;
  disconnect?: InputMaybe<ServiceDisconnectInput>;
};

export type ConversationServiceFieldInput = {
  create?: InputMaybe<ConversationServiceCreateFieldInput>;
  connect?: InputMaybe<ConversationServiceConnectFieldInput>;
};

export type ConversationServiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConversationServiceNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ConversationServiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConversationServiceNodeAggregationWhereInput>;
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

export type ConversationServiceUpdateConnectionInput = {
  node?: InputMaybe<ServiceUpdateInput>;
};

export type ConversationServiceUpdateFieldInput = {
  where?: InputMaybe<ConversationServiceConnectionWhere>;
  create?: InputMaybe<ConversationServiceCreateFieldInput>;
  connect?: InputMaybe<ConversationServiceConnectFieldInput>;
  update?: InputMaybe<ConversationServiceUpdateConnectionInput>;
  delete?: InputMaybe<ConversationServiceDeleteFieldInput>;
  disconnect?: InputMaybe<ConversationServiceDisconnectFieldInput>;
};

/** Fields to sort Conversations by. The order in which sorts are applied is not guaranteed when specifying many fields in one ConversationSort object. */
export type ConversationSort = {
  id?: InputMaybe<SortDirection>;
};

export type ConversationUpdateInput = {
  messages?: InputMaybe<Array<ConversationMessagesUpdateFieldInput>>;
  bots?: InputMaybe<Array<ConversationBotsUpdateFieldInput>>;
  users?: InputMaybe<Array<ConversationUsersUpdateFieldInput>>;
  owner?: InputMaybe<ConversationOwnerUpdateFieldInput>;
  service?: InputMaybe<ConversationServiceUpdateFieldInput>;
};

export type ConversationUsersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ConversationUsersAggregateInput>>;
  OR?: InputMaybe<Array<ConversationUsersAggregateInput>>;
  NOT?: InputMaybe<ConversationUsersAggregateInput>;
  node?: InputMaybe<ConversationUsersNodeAggregationWhereInput>;
};

export type ConversationUsersConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ConversationUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type ConversationUsersConnectionWhere = {
  AND?: InputMaybe<Array<ConversationUsersConnectionWhere>>;
  OR?: InputMaybe<Array<ConversationUsersConnectionWhere>>;
  NOT?: InputMaybe<ConversationUsersConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type ConversationUsersConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ConversationUsersConnectOrCreateFieldInputOnCreate;
};

export type ConversationUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ConversationUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type ConversationUsersDeleteFieldInput = {
  where?: InputMaybe<ConversationUsersConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type ConversationUsersDisconnectFieldInput = {
  where?: InputMaybe<ConversationUsersConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type ConversationUsersFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ConversationUsersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ConversationUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationUsersConnectFieldInput>>;
};

export type ConversationUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ConversationUsersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ConversationUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ConversationUsersNodeAggregationWhereInput>;
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
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  apiKey_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  apiKey_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  apiKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  apiKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ConversationUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ConversationUsersUpdateFieldInput = {
  where?: InputMaybe<ConversationUsersConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ConversationUsersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ConversationUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<ConversationUsersConnectFieldInput>>;
  update?: InputMaybe<ConversationUsersUpdateConnectionInput>;
  delete?: InputMaybe<Array<ConversationUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ConversationUsersDisconnectFieldInput>>;
};

export type ConversationWhere = {
  OR?: InputMaybe<Array<ConversationWhere>>;
  AND?: InputMaybe<Array<ConversationWhere>>;
  NOT?: InputMaybe<ConversationWhere>;
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
  messages?: InputMaybe<MessageWhere>;
  /** @deprecated Use `messages_NONE` instead. */
  messages_NOT?: InputMaybe<MessageWhere>;
  messagesAggregate?: InputMaybe<ConversationMessagesAggregateInput>;
  /** Return Conversations where all of the related Messages match this filter */
  messages_ALL?: InputMaybe<MessageWhere>;
  /** Return Conversations where none of the related Messages match this filter */
  messages_NONE?: InputMaybe<MessageWhere>;
  /** Return Conversations where one of the related Messages match this filter */
  messages_SINGLE?: InputMaybe<MessageWhere>;
  /** Return Conversations where some of the related Messages match this filter */
  messages_SOME?: InputMaybe<MessageWhere>;
  /** @deprecated Use `bots_SOME` instead. */
  bots?: InputMaybe<BotWhere>;
  /** @deprecated Use `bots_NONE` instead. */
  bots_NOT?: InputMaybe<BotWhere>;
  botsAggregate?: InputMaybe<ConversationBotsAggregateInput>;
  /** Return Conversations where all of the related Bots match this filter */
  bots_ALL?: InputMaybe<BotWhere>;
  /** Return Conversations where none of the related Bots match this filter */
  bots_NONE?: InputMaybe<BotWhere>;
  /** Return Conversations where one of the related Bots match this filter */
  bots_SINGLE?: InputMaybe<BotWhere>;
  /** Return Conversations where some of the related Bots match this filter */
  bots_SOME?: InputMaybe<BotWhere>;
  /** @deprecated Use `users_SOME` instead. */
  users?: InputMaybe<UserWhere>;
  /** @deprecated Use `users_NONE` instead. */
  users_NOT?: InputMaybe<UserWhere>;
  usersAggregate?: InputMaybe<ConversationUsersAggregateInput>;
  /** Return Conversations where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Conversations where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Conversations where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Conversations where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  owner?: InputMaybe<UserWhere>;
  owner_NOT?: InputMaybe<UserWhere>;
  ownerAggregate?: InputMaybe<ConversationOwnerAggregateInput>;
  service?: InputMaybe<ServiceWhere>;
  service_NOT?: InputMaybe<ServiceWhere>;
  serviceAggregate?: InputMaybe<ConversationServiceAggregateInput>;
  /** @deprecated Use `messagesConnection_SOME` instead. */
  messagesConnection?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** @deprecated Use `messagesConnection_NONE` instead. */
  messagesConnection_NOT?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** Return Conversations where all of the related ConversationMessagesConnections match this filter */
  messagesConnection_ALL?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** Return Conversations where none of the related ConversationMessagesConnections match this filter */
  messagesConnection_NONE?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** Return Conversations where one of the related ConversationMessagesConnections match this filter */
  messagesConnection_SINGLE?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** Return Conversations where some of the related ConversationMessagesConnections match this filter */
  messagesConnection_SOME?: InputMaybe<ConversationMessagesConnectionWhere>;
  /** @deprecated Use `botsConnection_SOME` instead. */
  botsConnection?: InputMaybe<ConversationBotsConnectionWhere>;
  /** @deprecated Use `botsConnection_NONE` instead. */
  botsConnection_NOT?: InputMaybe<ConversationBotsConnectionWhere>;
  /** Return Conversations where all of the related ConversationBotsConnections match this filter */
  botsConnection_ALL?: InputMaybe<ConversationBotsConnectionWhere>;
  /** Return Conversations where none of the related ConversationBotsConnections match this filter */
  botsConnection_NONE?: InputMaybe<ConversationBotsConnectionWhere>;
  /** Return Conversations where one of the related ConversationBotsConnections match this filter */
  botsConnection_SINGLE?: InputMaybe<ConversationBotsConnectionWhere>;
  /** Return Conversations where some of the related ConversationBotsConnections match this filter */
  botsConnection_SOME?: InputMaybe<ConversationBotsConnectionWhere>;
  /** @deprecated Use `usersConnection_SOME` instead. */
  usersConnection?: InputMaybe<ConversationUsersConnectionWhere>;
  /** @deprecated Use `usersConnection_NONE` instead. */
  usersConnection_NOT?: InputMaybe<ConversationUsersConnectionWhere>;
  /** Return Conversations where all of the related ConversationUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<ConversationUsersConnectionWhere>;
  /** Return Conversations where none of the related ConversationUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<ConversationUsersConnectionWhere>;
  /** Return Conversations where one of the related ConversationUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<ConversationUsersConnectionWhere>;
  /** Return Conversations where some of the related ConversationUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<ConversationUsersConnectionWhere>;
  ownerConnection?: InputMaybe<ConversationOwnerConnectionWhere>;
  ownerConnection_NOT?: InputMaybe<ConversationOwnerConnectionWhere>;
  serviceConnection?: InputMaybe<ConversationServiceConnectionWhere>;
  serviceConnection_NOT?: InputMaybe<ConversationServiceConnectionWhere>;
};

export type EmuleeCreateInput = {
  name: Scalars["String"]["input"];
};

export type EmuleeOptions = {
  /** Specify one or more EmuleeSort objects to sort Emulees by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EmuleeSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Fields to sort Emulees by. The order in which sorts are applied is not guaranteed when specifying many fields in one EmuleeSort object. */
export type EmuleeSort = {
  name?: InputMaybe<SortDirection>;
};

export type EmuleeUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmuleeWhere = {
  OR?: InputMaybe<Array<EmuleeWhere>>;
  AND?: InputMaybe<Array<EmuleeWhere>>;
  NOT?: InputMaybe<EmuleeWhere>;
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
};

export type EvaluationItemCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  question?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer?: InputMaybe<Scalars["String"]["input"]>;
  originalVector?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  emsAnswers?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  distances?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

export type EvaluationItemOptions = {
  /** Specify one or more EvaluationItemSort objects to sort EvaluationItems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EvaluationItemSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Fields to sort EvaluationItems by. The order in which sorts are applied is not guaranteed when specifying many fields in one EvaluationItemSort object. */
export type EvaluationItemSort = {
  id?: InputMaybe<SortDirection>;
  question?: InputMaybe<SortDirection>;
  originalAnswer?: InputMaybe<SortDirection>;
};

export type EvaluationItemUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  question?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer?: InputMaybe<Scalars["String"]["input"]>;
  originalVector?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  emsAnswers?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  distances?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  originalVector_POP?: InputMaybe<Scalars["Int"]["input"]>;
  originalVector_PUSH?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  emsAnswers_POP?: InputMaybe<Scalars["Int"]["input"]>;
  emsAnswers_PUSH?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  distances_POP?: InputMaybe<Scalars["Int"]["input"]>;
  distances_PUSH?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

export type EvaluationItemWhere = {
  OR?: InputMaybe<Array<EvaluationItemWhere>>;
  AND?: InputMaybe<Array<EvaluationItemWhere>>;
  NOT?: InputMaybe<EvaluationItemWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  question?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  question_NOT?: InputMaybe<Scalars["String"]["input"]>;
  question_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  question_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  question_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  question_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  question_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  question_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  question_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  question_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalAnswer_NOT?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalAnswer_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  originalAnswer_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  originalAnswer_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalAnswer_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalAnswer_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalAnswer_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  originalVector?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalVector_NOT?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  originalVector_INCLUDES?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  originalVector_NOT_INCLUDES?: InputMaybe<Scalars["Float"]["input"]>;
  emsAnswers?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emsAnswers_NOT?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  emsAnswers_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  emsAnswers_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  distances?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  distances_NOT?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  distances_INCLUDES?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  distances_NOT_INCLUDES?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MessageConnectInput = {
  tagged?: InputMaybe<MessageTaggedConnectInput>;
};

export type MessageConnectOrCreateInput = {
  tagged?: InputMaybe<MessageTaggedConnectOrCreateInput>;
};

export type MessageConnectWhere = {
  node: MessageWhere;
};

export type MessageCreateInput = {
  from: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
  timestamp: Scalars["String"]["input"];
  tagged?: InputMaybe<MessageTaggedCreateInput>;
};

export type MessageDeleteInput = {
  tagged?: InputMaybe<MessageTaggedDeleteInput>;
};

export type MessageDisconnectInput = {
  tagged?: InputMaybe<MessageTaggedDisconnectInput>;
};

export type MessageInput = {
  from: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
  timestamp: Scalars["String"]["input"];
};

export type MessageOptions = {
  /** Specify one or more MessageSort objects to sort Messages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MessageSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MessageRelationInput = {
  tagged?: InputMaybe<MessageTaggedCreateFieldInput>;
};

/** Fields to sort Messages by. The order in which sorts are applied is not guaranteed when specifying many fields in one MessageSort object. */
export type MessageSort = {
  id?: InputMaybe<SortDirection>;
  from?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type MessageTaggedBotConnectFieldInput = {
  where?: InputMaybe<BotConnectWhere>;
  connect?: InputMaybe<Array<BotConnectInput>>;
};

export type MessageTaggedBotConnectionWhere = {
  OR?: InputMaybe<Array<MessageTaggedBotConnectionWhere>>;
  AND?: InputMaybe<Array<MessageTaggedBotConnectionWhere>>;
  NOT?: InputMaybe<MessageTaggedBotConnectionWhere>;
  node?: InputMaybe<BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BotWhere>;
};

export type MessageTaggedBotCreateFieldInput = {
  node: BotCreateInput;
};

export type MessageTaggedBotDeleteFieldInput = {
  where?: InputMaybe<MessageTaggedBotConnectionWhere>;
  delete?: InputMaybe<BotDeleteInput>;
};

export type MessageTaggedBotDisconnectFieldInput = {
  where?: InputMaybe<MessageTaggedBotConnectionWhere>;
  disconnect?: InputMaybe<BotDisconnectInput>;
};

export type MessageTaggedBotFieldInput = {
  create?: InputMaybe<Array<MessageTaggedBotCreateFieldInput>>;
  connect?: InputMaybe<Array<MessageTaggedBotConnectFieldInput>>;
};

export type MessageTaggedBotUpdateConnectionInput = {
  node?: InputMaybe<BotUpdateInput>;
};

export type MessageTaggedBotUpdateFieldInput = {
  where?: InputMaybe<MessageTaggedBotConnectionWhere>;
  create?: InputMaybe<Array<MessageTaggedBotCreateFieldInput>>;
  connect?: InputMaybe<Array<MessageTaggedBotConnectFieldInput>>;
  delete?: InputMaybe<Array<MessageTaggedBotDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MessageTaggedBotDisconnectFieldInput>>;
  update?: InputMaybe<MessageTaggedBotUpdateConnectionInput>;
};

export type MessageTaggedConnectInput = {
  Bot?: InputMaybe<Array<MessageTaggedBotConnectFieldInput>>;
  User?: InputMaybe<Array<MessageTaggedUserConnectFieldInput>>;
};

export type MessageTaggedConnectionWhere = {
  Bot?: InputMaybe<MessageTaggedBotConnectionWhere>;
  User?: InputMaybe<MessageTaggedUserConnectionWhere>;
};

export type MessageTaggedConnectOrCreateInput = {
  User?: InputMaybe<Array<MessageTaggedUserConnectOrCreateFieldInput>>;
};

export type MessageTaggedCreateFieldInput = {
  Bot?: InputMaybe<Array<MessageTaggedBotCreateFieldInput>>;
  User?: InputMaybe<Array<MessageTaggedUserCreateFieldInput>>;
};

export type MessageTaggedCreateInput = {
  Bot?: InputMaybe<MessageTaggedBotFieldInput>;
  User?: InputMaybe<MessageTaggedUserFieldInput>;
};

export type MessageTaggedDeleteInput = {
  Bot?: InputMaybe<Array<MessageTaggedBotDeleteFieldInput>>;
  User?: InputMaybe<Array<MessageTaggedUserDeleteFieldInput>>;
};

export type MessageTaggedDisconnectInput = {
  Bot?: InputMaybe<Array<MessageTaggedBotDisconnectFieldInput>>;
  User?: InputMaybe<Array<MessageTaggedUserDisconnectFieldInput>>;
};

export type MessageTaggedUpdateInput = {
  Bot?: InputMaybe<Array<MessageTaggedBotUpdateFieldInput>>;
  User?: InputMaybe<Array<MessageTaggedUserUpdateFieldInput>>;
};

export type MessageTaggedUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type MessageTaggedUserConnectionWhere = {
  OR?: InputMaybe<Array<MessageTaggedUserConnectionWhere>>;
  AND?: InputMaybe<Array<MessageTaggedUserConnectionWhere>>;
  NOT?: InputMaybe<MessageTaggedUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type MessageTaggedUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: MessageTaggedUserConnectOrCreateFieldInputOnCreate;
};

export type MessageTaggedUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type MessageTaggedUserCreateFieldInput = {
  node: UserCreateInput;
};

export type MessageTaggedUserDeleteFieldInput = {
  where?: InputMaybe<MessageTaggedUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MessageTaggedUserDisconnectFieldInput = {
  where?: InputMaybe<MessageTaggedUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type MessageTaggedUserFieldInput = {
  create?: InputMaybe<Array<MessageTaggedUserCreateFieldInput>>;
  connect?: InputMaybe<Array<MessageTaggedUserConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<MessageTaggedUserConnectOrCreateFieldInput>
  >;
};

export type MessageTaggedUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type MessageTaggedUserUpdateFieldInput = {
  where?: InputMaybe<MessageTaggedUserConnectionWhere>;
  create?: InputMaybe<Array<MessageTaggedUserCreateFieldInput>>;
  connect?: InputMaybe<Array<MessageTaggedUserConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<MessageTaggedUserConnectOrCreateFieldInput>
  >;
  delete?: InputMaybe<Array<MessageTaggedUserDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MessageTaggedUserDisconnectFieldInput>>;
  update?: InputMaybe<MessageTaggedUserUpdateConnectionInput>;
};

export type MessageUpdateInput = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["String"]["input"]>;
  tagged?: InputMaybe<MessageTaggedUpdateInput>;
};

export type MessageWhere = {
  OR?: InputMaybe<Array<MessageWhere>>;
  AND?: InputMaybe<Array<MessageWhere>>;
  NOT?: InputMaybe<MessageWhere>;
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
  taggedConnection?: InputMaybe<MessageTaggedConnectionWhere>;
  /** @deprecated Use `taggedConnection_NONE` instead. */
  taggedConnection_NOT?: InputMaybe<MessageTaggedConnectionWhere>;
  /** Return Messages where all of the related MessageTaggedConnections match this filter */
  taggedConnection_ALL?: InputMaybe<MessageTaggedConnectionWhere>;
  /** Return Messages where none of the related MessageTaggedConnections match this filter */
  taggedConnection_NONE?: InputMaybe<MessageTaggedConnectionWhere>;
  /** Return Messages where one of the related MessageTaggedConnections match this filter */
  taggedConnection_SINGLE?: InputMaybe<MessageTaggedConnectionWhere>;
  /** Return Messages where some of the related MessageTaggedConnections match this filter */
  taggedConnection_SOME?: InputMaybe<MessageTaggedConnectionWhere>;
};

export type QueryOptions = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ServiceBotsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ServiceBotsAggregateInput>>;
  OR?: InputMaybe<Array<ServiceBotsAggregateInput>>;
  NOT?: InputMaybe<ServiceBotsAggregateInput>;
  node?: InputMaybe<ServiceBotsNodeAggregationWhereInput>;
};

export type ServiceBotsConnectFieldInput = {
  where?: InputMaybe<BotConnectWhere>;
  connect?: InputMaybe<Array<BotConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ServiceBotsConnectionSort = {
  node?: InputMaybe<BotSort>;
};

export type ServiceBotsConnectionWhere = {
  AND?: InputMaybe<Array<ServiceBotsConnectionWhere>>;
  OR?: InputMaybe<Array<ServiceBotsConnectionWhere>>;
  NOT?: InputMaybe<ServiceBotsConnectionWhere>;
  node?: InputMaybe<BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BotWhere>;
};

export type ServiceBotsCreateFieldInput = {
  node: BotCreateInput;
};

export type ServiceBotsDeleteFieldInput = {
  where?: InputMaybe<ServiceBotsConnectionWhere>;
  delete?: InputMaybe<BotDeleteInput>;
};

export type ServiceBotsDisconnectFieldInput = {
  where?: InputMaybe<ServiceBotsConnectionWhere>;
  disconnect?: InputMaybe<BotDisconnectInput>;
};

export type ServiceBotsFieldInput = {
  create?: InputMaybe<Array<ServiceBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<ServiceBotsConnectFieldInput>>;
};

export type ServiceBotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ServiceBotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ServiceBotsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ServiceBotsNodeAggregationWhereInput>;
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

export type ServiceBotsUpdateConnectionInput = {
  node?: InputMaybe<BotUpdateInput>;
};

export type ServiceBotsUpdateFieldInput = {
  where?: InputMaybe<ServiceBotsConnectionWhere>;
  create?: InputMaybe<Array<ServiceBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<ServiceBotsConnectFieldInput>>;
  update?: InputMaybe<ServiceBotsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ServiceBotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ServiceBotsDisconnectFieldInput>>;
};

export type ServiceConnectInput = {
  bots?: InputMaybe<Array<ServiceBotsConnectFieldInput>>;
};

export type ServiceConnectWhere = {
  node: ServiceWhere;
};

export type ServiceCreateInput = {
  name: Scalars["String"]["input"];
  bots?: InputMaybe<ServiceBotsFieldInput>;
};

export type ServiceDeleteInput = {
  bots?: InputMaybe<Array<ServiceBotsDeleteFieldInput>>;
};

export type ServiceDisconnectInput = {
  bots?: InputMaybe<Array<ServiceBotsDisconnectFieldInput>>;
};

export type ServiceInput = {
  name: Scalars["String"]["input"];
};

export type ServiceOptions = {
  /** Specify one or more ServiceSort objects to sort Services by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ServiceSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ServiceRelationInput = {
  bots?: InputMaybe<Array<ServiceBotsCreateFieldInput>>;
};

/** Fields to sort Services by. The order in which sorts are applied is not guaranteed when specifying many fields in one ServiceSort object. */
export type ServiceSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ServiceUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  bots?: InputMaybe<Array<ServiceBotsUpdateFieldInput>>;
};

export type ServiceWhere = {
  OR?: InputMaybe<Array<ServiceWhere>>;
  AND?: InputMaybe<Array<ServiceWhere>>;
  NOT?: InputMaybe<ServiceWhere>;
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
  bots?: InputMaybe<BotWhere>;
  /** @deprecated Use `bots_NONE` instead. */
  bots_NOT?: InputMaybe<BotWhere>;
  botsAggregate?: InputMaybe<ServiceBotsAggregateInput>;
  /** Return Services where all of the related Bots match this filter */
  bots_ALL?: InputMaybe<BotWhere>;
  /** Return Services where none of the related Bots match this filter */
  bots_NONE?: InputMaybe<BotWhere>;
  /** Return Services where one of the related Bots match this filter */
  bots_SINGLE?: InputMaybe<BotWhere>;
  /** Return Services where some of the related Bots match this filter */
  bots_SOME?: InputMaybe<BotWhere>;
  /** @deprecated Use `botsConnection_SOME` instead. */
  botsConnection?: InputMaybe<ServiceBotsConnectionWhere>;
  /** @deprecated Use `botsConnection_NONE` instead. */
  botsConnection_NOT?: InputMaybe<ServiceBotsConnectionWhere>;
  /** Return Services where all of the related ServiceBotsConnections match this filter */
  botsConnection_ALL?: InputMaybe<ServiceBotsConnectionWhere>;
  /** Return Services where none of the related ServiceBotsConnections match this filter */
  botsConnection_NONE?: InputMaybe<ServiceBotsConnectionWhere>;
  /** Return Services where one of the related ServiceBotsConnections match this filter */
  botsConnection_SINGLE?: InputMaybe<ServiceBotsConnectionWhere>;
  /** Return Services where some of the related ServiceBotsConnections match this filter */
  botsConnection_SOME?: InputMaybe<ServiceBotsConnectionWhere>;
};

export type Tag_RecipientWhere = {
  Bot?: InputMaybe<BotWhere>;
  User?: InputMaybe<UserWhere>;
};

export type UserBotsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserBotsAggregateInput>>;
  OR?: InputMaybe<Array<UserBotsAggregateInput>>;
  NOT?: InputMaybe<UserBotsAggregateInput>;
  node?: InputMaybe<UserBotsNodeAggregationWhereInput>;
};

export type UserBotsConnectFieldInput = {
  where?: InputMaybe<BotConnectWhere>;
  connect?: InputMaybe<Array<BotConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserBotsConnectionSort = {
  node?: InputMaybe<BotSort>;
};

export type UserBotsConnectionWhere = {
  AND?: InputMaybe<Array<UserBotsConnectionWhere>>;
  OR?: InputMaybe<Array<UserBotsConnectionWhere>>;
  NOT?: InputMaybe<UserBotsConnectionWhere>;
  node?: InputMaybe<BotWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BotWhere>;
};

export type UserBotsCreateFieldInput = {
  node: BotCreateInput;
};

export type UserBotsDeleteFieldInput = {
  where?: InputMaybe<UserBotsConnectionWhere>;
  delete?: InputMaybe<BotDeleteInput>;
};

export type UserBotsDisconnectFieldInput = {
  where?: InputMaybe<UserBotsConnectionWhere>;
  disconnect?: InputMaybe<BotDisconnectInput>;
};

export type UserBotsFieldInput = {
  create?: InputMaybe<Array<UserBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserBotsConnectFieldInput>>;
};

export type UserBotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserBotsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserBotsNodeAggregationWhereInput>;
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

export type UserBotsUpdateConnectionInput = {
  node?: InputMaybe<BotUpdateInput>;
};

export type UserBotsUpdateFieldInput = {
  where?: InputMaybe<UserBotsConnectionWhere>;
  create?: InputMaybe<Array<UserBotsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserBotsConnectFieldInput>>;
  update?: InputMaybe<UserBotsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserBotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserBotsDisconnectFieldInput>>;
};

export type UserConnectInput = {
  bots?: InputMaybe<Array<UserBotsConnectFieldInput>>;
  conversations?: InputMaybe<Array<UserConversationsConnectFieldInput>>;
  ownedConversations?: InputMaybe<
    Array<UserOwnedConversationsConnectFieldInput>
  >;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserConversationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserConversationsAggregateInput>>;
  OR?: InputMaybe<Array<UserConversationsAggregateInput>>;
  NOT?: InputMaybe<UserConversationsAggregateInput>;
  node?: InputMaybe<UserConversationsNodeAggregationWhereInput>;
};

export type UserConversationsConnectFieldInput = {
  where?: InputMaybe<ConversationConnectWhere>;
  connect?: InputMaybe<Array<ConversationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserConversationsConnectionSort = {
  node?: InputMaybe<ConversationSort>;
};

export type UserConversationsConnectionWhere = {
  AND?: InputMaybe<Array<UserConversationsConnectionWhere>>;
  OR?: InputMaybe<Array<UserConversationsConnectionWhere>>;
  NOT?: InputMaybe<UserConversationsConnectionWhere>;
  node?: InputMaybe<ConversationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ConversationWhere>;
};

export type UserConversationsCreateFieldInput = {
  node: ConversationCreateInput;
};

export type UserConversationsDeleteFieldInput = {
  where?: InputMaybe<UserConversationsConnectionWhere>;
  delete?: InputMaybe<ConversationDeleteInput>;
};

export type UserConversationsDisconnectFieldInput = {
  where?: InputMaybe<UserConversationsConnectionWhere>;
  disconnect?: InputMaybe<ConversationDisconnectInput>;
};

export type UserConversationsFieldInput = {
  create?: InputMaybe<Array<UserConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserConversationsConnectFieldInput>>;
};

export type UserConversationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserConversationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserConversationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserConversationsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserConversationsUpdateConnectionInput = {
  node?: InputMaybe<ConversationUpdateInput>;
};

export type UserConversationsUpdateFieldInput = {
  where?: InputMaybe<UserConversationsConnectionWhere>;
  create?: InputMaybe<Array<UserConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserConversationsConnectFieldInput>>;
  update?: InputMaybe<UserConversationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserConversationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserConversationsDisconnectFieldInput>>;
};

export type UserCreateInput = {
  username: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  apiKey: Scalars["String"]["input"];
  bots?: InputMaybe<UserBotsFieldInput>;
  conversations?: InputMaybe<UserConversationsFieldInput>;
  ownedConversations?: InputMaybe<UserOwnedConversationsFieldInput>;
};

export type UserDeleteInput = {
  bots?: InputMaybe<Array<UserBotsDeleteFieldInput>>;
  conversations?: InputMaybe<Array<UserConversationsDeleteFieldInput>>;
  ownedConversations?: InputMaybe<
    Array<UserOwnedConversationsDeleteFieldInput>
  >;
};

export type UserDisconnectInput = {
  bots?: InputMaybe<Array<UserBotsDisconnectFieldInput>>;
  conversations?: InputMaybe<Array<UserConversationsDisconnectFieldInput>>;
  ownedConversations?: InputMaybe<
    Array<UserOwnedConversationsDisconnectFieldInput>
  >;
};

export type UserOnCreateInput = {
  username: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  apiKey: Scalars["String"]["input"];
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserOwnedConversationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserOwnedConversationsAggregateInput>>;
  OR?: InputMaybe<Array<UserOwnedConversationsAggregateInput>>;
  NOT?: InputMaybe<UserOwnedConversationsAggregateInput>;
  node?: InputMaybe<UserOwnedConversationsNodeAggregationWhereInput>;
};

export type UserOwnedConversationsConnectFieldInput = {
  where?: InputMaybe<ConversationConnectWhere>;
  connect?: InputMaybe<Array<ConversationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type UserOwnedConversationsConnectionSort = {
  node?: InputMaybe<ConversationSort>;
};

export type UserOwnedConversationsConnectionWhere = {
  AND?: InputMaybe<Array<UserOwnedConversationsConnectionWhere>>;
  OR?: InputMaybe<Array<UserOwnedConversationsConnectionWhere>>;
  NOT?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  node?: InputMaybe<ConversationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ConversationWhere>;
};

export type UserOwnedConversationsCreateFieldInput = {
  node: ConversationCreateInput;
};

export type UserOwnedConversationsDeleteFieldInput = {
  where?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  delete?: InputMaybe<ConversationDeleteInput>;
};

export type UserOwnedConversationsDisconnectFieldInput = {
  where?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  disconnect?: InputMaybe<ConversationDisconnectInput>;
};

export type UserOwnedConversationsFieldInput = {
  create?: InputMaybe<Array<UserOwnedConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserOwnedConversationsConnectFieldInput>>;
};

export type UserOwnedConversationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserOwnedConversationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserOwnedConversationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserOwnedConversationsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
};

export type UserOwnedConversationsUpdateConnectionInput = {
  node?: InputMaybe<ConversationUpdateInput>;
};

export type UserOwnedConversationsUpdateFieldInput = {
  where?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  create?: InputMaybe<Array<UserOwnedConversationsCreateFieldInput>>;
  connect?: InputMaybe<Array<UserOwnedConversationsConnectFieldInput>>;
  update?: InputMaybe<UserOwnedConversationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserOwnedConversationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserOwnedConversationsDisconnectFieldInput>>;
};

export type UserRelationInput = {
  bots?: InputMaybe<Array<UserBotsCreateFieldInput>>;
  conversations?: InputMaybe<Array<UserConversationsCreateFieldInput>>;
  ownedConversations?: InputMaybe<
    Array<UserOwnedConversationsCreateFieldInput>
  >;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  apiKey?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  apiKey?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  username?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  apiKey?: InputMaybe<Scalars["String"]["input"]>;
  bots?: InputMaybe<Array<UserBotsUpdateFieldInput>>;
  conversations?: InputMaybe<Array<UserConversationsUpdateFieldInput>>;
  ownedConversations?: InputMaybe<
    Array<UserOwnedConversationsUpdateFieldInput>
  >;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
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
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  apiKey?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  apiKey_NOT?: InputMaybe<Scalars["String"]["input"]>;
  apiKey_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  apiKey_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  apiKey_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  apiKey_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  apiKey_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  apiKey_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  apiKey_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  apiKey_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `bots_SOME` instead. */
  bots?: InputMaybe<BotWhere>;
  /** @deprecated Use `bots_NONE` instead. */
  bots_NOT?: InputMaybe<BotWhere>;
  botsAggregate?: InputMaybe<UserBotsAggregateInput>;
  /** Return Users where all of the related Bots match this filter */
  bots_ALL?: InputMaybe<BotWhere>;
  /** Return Users where none of the related Bots match this filter */
  bots_NONE?: InputMaybe<BotWhere>;
  /** Return Users where one of the related Bots match this filter */
  bots_SINGLE?: InputMaybe<BotWhere>;
  /** Return Users where some of the related Bots match this filter */
  bots_SOME?: InputMaybe<BotWhere>;
  /** @deprecated Use `conversations_SOME` instead. */
  conversations?: InputMaybe<ConversationWhere>;
  /** @deprecated Use `conversations_NONE` instead. */
  conversations_NOT?: InputMaybe<ConversationWhere>;
  conversationsAggregate?: InputMaybe<UserConversationsAggregateInput>;
  /** Return Users where all of the related Conversations match this filter */
  conversations_ALL?: InputMaybe<ConversationWhere>;
  /** Return Users where none of the related Conversations match this filter */
  conversations_NONE?: InputMaybe<ConversationWhere>;
  /** Return Users where one of the related Conversations match this filter */
  conversations_SINGLE?: InputMaybe<ConversationWhere>;
  /** Return Users where some of the related Conversations match this filter */
  conversations_SOME?: InputMaybe<ConversationWhere>;
  /** @deprecated Use `ownedConversations_SOME` instead. */
  ownedConversations?: InputMaybe<ConversationWhere>;
  /** @deprecated Use `ownedConversations_NONE` instead. */
  ownedConversations_NOT?: InputMaybe<ConversationWhere>;
  ownedConversationsAggregate?: InputMaybe<UserOwnedConversationsAggregateInput>;
  /** Return Users where all of the related Conversations match this filter */
  ownedConversations_ALL?: InputMaybe<ConversationWhere>;
  /** Return Users where none of the related Conversations match this filter */
  ownedConversations_NONE?: InputMaybe<ConversationWhere>;
  /** Return Users where one of the related Conversations match this filter */
  ownedConversations_SINGLE?: InputMaybe<ConversationWhere>;
  /** Return Users where some of the related Conversations match this filter */
  ownedConversations_SOME?: InputMaybe<ConversationWhere>;
  /** @deprecated Use `botsConnection_SOME` instead. */
  botsConnection?: InputMaybe<UserBotsConnectionWhere>;
  /** @deprecated Use `botsConnection_NONE` instead. */
  botsConnection_NOT?: InputMaybe<UserBotsConnectionWhere>;
  /** Return Users where all of the related UserBotsConnections match this filter */
  botsConnection_ALL?: InputMaybe<UserBotsConnectionWhere>;
  /** Return Users where none of the related UserBotsConnections match this filter */
  botsConnection_NONE?: InputMaybe<UserBotsConnectionWhere>;
  /** Return Users where one of the related UserBotsConnections match this filter */
  botsConnection_SINGLE?: InputMaybe<UserBotsConnectionWhere>;
  /** Return Users where some of the related UserBotsConnections match this filter */
  botsConnection_SOME?: InputMaybe<UserBotsConnectionWhere>;
  /** @deprecated Use `conversationsConnection_SOME` instead. */
  conversationsConnection?: InputMaybe<UserConversationsConnectionWhere>;
  /** @deprecated Use `conversationsConnection_NONE` instead. */
  conversationsConnection_NOT?: InputMaybe<UserConversationsConnectionWhere>;
  /** Return Users where all of the related UserConversationsConnections match this filter */
  conversationsConnection_ALL?: InputMaybe<UserConversationsConnectionWhere>;
  /** Return Users where none of the related UserConversationsConnections match this filter */
  conversationsConnection_NONE?: InputMaybe<UserConversationsConnectionWhere>;
  /** Return Users where one of the related UserConversationsConnections match this filter */
  conversationsConnection_SINGLE?: InputMaybe<UserConversationsConnectionWhere>;
  /** Return Users where some of the related UserConversationsConnections match this filter */
  conversationsConnection_SOME?: InputMaybe<UserConversationsConnectionWhere>;
  /** @deprecated Use `ownedConversationsConnection_SOME` instead. */
  ownedConversationsConnection?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  /** @deprecated Use `ownedConversationsConnection_NONE` instead. */
  ownedConversationsConnection_NOT?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  /** Return Users where all of the related UserOwnedConversationsConnections match this filter */
  ownedConversationsConnection_ALL?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  /** Return Users where none of the related UserOwnedConversationsConnections match this filter */
  ownedConversationsConnection_NONE?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  /** Return Users where one of the related UserOwnedConversationsConnections match this filter */
  ownedConversationsConnection_SINGLE?: InputMaybe<UserOwnedConversationsConnectionWhere>;
  /** Return Users where some of the related UserOwnedConversationsConnections match this filter */
  ownedConversationsConnection_SOME?: InputMaybe<UserOwnedConversationsConnectionWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface BotAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  endpoint?: StringAggregateInputNonNullable;
  username?: StringAggregateInputNonNullable;
  personName?: StringAggregateInputNonNullable;
}

export declare class BotModel {
  public find(args?: {
    where?: BotWhere;

    options?: BotOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Bot[]>;
  public create(args: {
    input: BotCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateBotsMutationResponse>;
  public update(args: {
    where?: BotWhere;
    update?: BotUpdateInput;
    connect?: BotConnectInput;
    disconnect?: BotDisconnectInput;
    create?: BotCreateInput;
    connectOrCreate?: BotConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateBotsMutationResponse>;
  public delete(args: {
    where?: BotWhere;
    delete?: BotDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: BotWhere;

    aggregate: BotAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<BotAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ServiceAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
}

export declare class ServiceModel {
  public find(args?: {
    where?: ServiceWhere;

    options?: ServiceOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Service[]>;
  public create(args: {
    input: ServiceCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateServicesMutationResponse>;
  public update(args: {
    where?: ServiceWhere;
    update?: ServiceUpdateInput;
    connect?: ServiceConnectInput;
    disconnect?: ServiceDisconnectInput;
    create?: ServiceCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateServicesMutationResponse>;
  public delete(args: {
    where?: ServiceWhere;
    delete?: ServiceDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ServiceWhere;

    aggregate: ServiceAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ServiceAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface EvaluationItemAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  question?: StringAggregateInputNullable;
  originalAnswer?: StringAggregateInputNullable;
}

export declare class EvaluationItemModel {
  public find(args?: {
    where?: EvaluationItemWhere;

    options?: EvaluationItemOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<EvaluationItem[]>;
  public create(args: {
    input: EvaluationItemCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEvaluationItemsMutationResponse>;
  public update(args: {
    where?: EvaluationItemWhere;
    update?: EvaluationItemUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEvaluationItemsMutationResponse>;
  public delete(args: {
    where?: EvaluationItemWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EvaluationItemWhere;

    aggregate: EvaluationItemAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EvaluationItemAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  username?: StringAggregateInputNonNullable;
  email?: StringAggregateInputNonNullable;
  apiKey?: StringAggregateInputNonNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface EmuleeAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
}

export declare class EmuleeModel {
  public find(args?: {
    where?: EmuleeWhere;

    options?: EmuleeOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Emulee[]>;
  public create(args: {
    input: EmuleeCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEmuleesMutationResponse>;
  public update(args: {
    where?: EmuleeWhere;
    update?: EmuleeUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEmuleesMutationResponse>;
  public delete(args: {
    where?: EmuleeWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EmuleeWhere;

    aggregate: EmuleeAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EmuleeAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ConversationAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
}

export declare class ConversationModel {
  public find(args?: {
    where?: ConversationWhere;

    options?: ConversationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Conversation[]>;
  public create(args: {
    input: ConversationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateConversationsMutationResponse>;
  public update(args: {
    where?: ConversationWhere;
    update?: ConversationUpdateInput;
    connect?: ConversationConnectInput;
    disconnect?: ConversationDisconnectInput;
    create?: ConversationCreateInput;
    connectOrCreate?: ConversationConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateConversationsMutationResponse>;
  public delete(args: {
    where?: ConversationWhere;
    delete?: ConversationDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ConversationWhere;

    aggregate: ConversationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ConversationAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface MessageAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  from?: StringAggregateInputNonNullable;
  text?: StringAggregateInputNonNullable;
  timestamp?: StringAggregateInputNonNullable;
}

export declare class MessageModel {
  public find(args?: {
    where?: MessageWhere;

    options?: MessageOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Message[]>;
  public create(args: {
    input: MessageCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMessagesMutationResponse>;
  public update(args: {
    where?: MessageWhere;
    update?: MessageUpdateInput;
    connect?: MessageConnectInput;
    disconnect?: MessageDisconnectInput;
    create?: MessageCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMessagesMutationResponse>;
  public delete(args: {
    where?: MessageWhere;
    delete?: MessageDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MessageWhere;

    aggregate: MessageAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MessageAggregateSelection>;
}

export interface ModelMap {
  Bot: BotModel;
  Service: ServiceModel;
  EvaluationItem: EvaluationItemModel;
  User: UserModel;
  Emulee: EmuleeModel;
  Conversation: ConversationModel;
  Message: MessageModel;
}
