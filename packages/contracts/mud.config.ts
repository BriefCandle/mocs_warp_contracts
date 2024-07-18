import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  systems: {
    Errors: {
      name: "Errors",
      openAccess: false,
      accessList: [],
    },
    MockSystem: {
      openAccess: false,
      accessList: [],
    },
    MockShipSystem: {
      openAccess: false,
      accessList: [],
    },
  },
  tables: {
    // for resource like spice & crystal
    TokenAddress: {
      schema: {
        entityType: "bytes16",
        value: "address",
      },
      key: ["entityType"],
    },
    Constant: "uint32",
    Counter: {
      schema: {
        entityType: "bytes16",
        value: "uint256",
      },
      key: ["entityType"],
    },
    Alliance: "bytes32",
    AllianceApplied: "bytes32",
    AllianceInfo: {
      schema: {
        alliance: "bytes32",
        approver: "bytes32",
        cooldown: "uint40",
        maxMember: "uint32",
      },
      key: ["alliance"],
    },
    // alliance member amount
    MemberAmount: "uint32",
    Owner: "bytes32",
    Commander: "bytes32",
    SpawnTime: "uint40",
    Approval: "bytes32",
    EntityType: "bytes16",
    Health: "uint32",
    Allowance: {
      schema: {
        entityType: "bytes16",
        owner: "bytes32",
        spender: "bytes32",
        value: "uint256",
      },
      key: ["entityType", "owner", "spender"],
    },
    Balance: {
      schema: {
        entityType: "bytes16",
        owner: "bytes32",
        value: "uint256",
      },
      key: ["entityType", "owner"],
    },
    TotalSupply: {
      schema: {
        entityType: "bytes16",
        value: "uint256",
      },
      key: ["entityType"],
    },
    StoredSize: "uint256",
    // ex., amount in queue in builder & accumulator; miner amount in station
    Amount: "uint256",
    LastUpdated: "uint40",
    // player -> amount
    ShipAmount: "uint8",
    Path: {
      schema: {
        id: "bytes32",
        fromX: "uint32",
        fromY: "uint32",
        toX: "uint32",
        toY: "uint32",
        lastUpdated: "uint40",
        duration: "uint40",
      },
      key: ["id"],
    },
    // if toEntity no longer exist, can only retreat to base hangar
    WarpPath: {
      schema: {
        id: "bytes32",
        fromX: "uint32",
        fromY: "uint32",
        toX: "uint32",
        toY: "uint32",
        toEntity: "bytes32",
        lastUpdated: "uint40",
        duration: "uint40",
      },
      key: ["id"],
    },
    // used for display purpose since ship has returned to hangar already
    RetreatPath: {
      schema: {
        id: "bytes32",
        fromX: "uint32",
        fromY: "uint32",
        toEntity: "bytes32",
        lastUpdated: "uint40",
        duration: "uint40",
      },
      key: ["id"],
    },
    SharedSpecs: {
      schema: {
        entityType: "bytes16",
        size: "uint128",
        maxHealth: "uint32",
      },
      key: ["entityType"],
    },
    ContainerSpecs: {
      schema: {
        entityType: "bytes16",
        capacity: "uint256",
      },
      key: ["entityType"],
    },
    // base should own 3 storages for resources, modules & ships,
    // a builder, an assembler, and several miners
    BaseSpecs: {
      schema: {
        entityType: "bytes16",
        level: "uint8",
        shipAmount: "uint8",
        minerAmount: "uint8",
      },
      key: ["entityType"],
    },
    // base share a outpost specs
    // purpose of outpost is to allow warp & to transfer station
    // later can allow storage of ships & modules & resources
    OutpostSpecs: {
      schema: {
        entityType: "bytes16",
        healthRate: "uint32",
        attack: "uint32",
      },
      key: ["entityType"],
    },
    // base -> amount
    MinerAmount: "uint8",
    // use a factor to convert mining rate & capacity for different resource types
    MinerSpecs: {
      schema: {
        entityType: "bytes16",
        speed: "uint32",
        rate: "uint128",
        capacity: "uint256",
      },
      key: ["entityType"],
    },
    MinerInfo: {
      schema: {
        minerId: "bytes32",
        celestial: "bytes32",
        lastUpdated: "uint40",
      },
      key: ["minerId"],
    },
    // asteroid ->
    AsteroidMining: "bool",
    ResourceSpecs: {
      schema: {
        entityType: "bytes16",
        maxAmount: "uint256",
        emissionRate: "uint128",
        rarity: "uint16",
      },
      key: ["entityType"],
    },
    // builder is used to build modules
    BuilderSpecs: {
      schema: {
        entityType: "bytes16",
        rate: "uint32",
      },
      key: ["entityType"],
    },
    // // for now, assemble is instant
    // AssemblerSpecs: {
    //   schema: {
    //     entityType: "bytes16",
    //     size: "uint8",
    //     rate: "uint32",
    //   },
    //   key: ["entityType"],
    // },
    // repair, outpost, modules, & base upgrades (which have different input & output)
    MakeCost: {
      schema: {
        entityType: "bytes16",
        // first 16 bytes is the type
        // second 16 bytes is the amount
        timeCost: "uint40",
        // output is just entityType?
        output: "bytes16",
        inputs: "bytes32[]",
      },
      key: ["entityType"],
    },
    // grid coord entity id -> outpost/base id
    // TODO: refactor WarpPathLogic
    GridEntity: "bytes32",
    // grid coord entity id -> ; used to check if a player base has spawned
    GridSpawned: "bool",
    ModuleSpecs: {
      schema: {
        entityType: "bytes16",
        attack: "uint32",
        // cooldownRate: "uint32",
        range: "uint32",
        speed: "uint32",
        // warpSpeed: "uint32",
        maxHealth: "uint32",
      },
      key: ["entityType"],
    },
    // moduleType ->
    BlueprintSpecs: {
      schema: {
        entityType: "bytes16",
        rarity: "uint8",
        price: "uint128",
      },
      key: ["entityType"],
    },
    // later, can use blueprint to assemble ships?
    // thus, make it shipSpecs?
    ShipStats: {
      schema: {
        shipId: "bytes32",
        attack: "uint32",
        // cooldownRate: "uint32",
        range: "uint32",
        speed: "uint32",
        // warpSpeed: "uint32",
        maxHealth: "uint32",
      },
      key: ["shipId"],
    },
    ShipModules: "bytes32[]",
  },
});
