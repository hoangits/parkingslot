/**
 * Created by SaliproPham on 9/11/14.
 */
var CONSTANT = {
        //CODE VERSION GAME
        CODE_ERR_VERSION_GAME: 900,     //Version game is old. Please update new game version
        CODE_ERR_MAINTAIN_GAME: 901,    //Maintain game
        //SYSTEM ERROR
        CODE_ERR_SYSTEM_ERROR: 999,     //System error. Please try again
        //CODE GLOBAL
        CODE_SUCCESS : 200,             //Success
        CODE_DATA_EMPTY : 201,          // Data empty
        CODE_ERR_PWD_MATCHING: 202,     //Password is not matching
        CODE_ERR_REQUIRE_INPUT: 203,    //Require input params
        
        //VNG API INTERNAL
        CODE_ERR_PERMISSION_DENIED: 303,    //Your IP is permission denied
        
        //ACCOUNT CODE DEFINE
        CODE_ERR_ACCT_REQUIRE_INPUT: 1001,  //Require input params
        CODE_ERR_ACCT_OTHER_LOGIN: 1002,    //This device has not link
        CODE_ERR_ACCT_CHANGE_NAME: 1003,    //You can only change name for once
        CODE_ERR_EXIST_OTHER_DEVICE: 1004,   //Confirm for login by your device
        
        //TOKEN CODE DEFINE
        CODE_ERR_TOKEN_INVALID: 1101,   //Token unavailable
        CODE_ERR_TOKEN_EXPIRED: 1102,   //Token is expired
        
        //END TOKEN CODE DEFINE
        
        //ROOM CODE DEFINE
        CODE_ERR_ROOM_NOT_FOUND: 2001,      //Room not found
        CODE_SUGGEST_BOT_FULL_PERFORMANCE: 2002, //code suggest bot when full performance host
        CODE_ERR_FULL_ENERGY_SEARCH: 2003,  //Full energy search
        //END ROOM CODE DEFINE
        
        //RECORD GAME CODE DEFINE   2101 -> 2199
        CODE_ERR_GRECORD_NOT_FOUND: 2101,   //bot game record not found
        CODE_ERR_BOT_CHEAT: 2102,           //Cheat reward on Bot game
        CODE_ERR_BOT_CHEAT_CLIENT: 2103,           //Cheat req get reward when play with BOT AI
                
        //CARD UPGRADE
        CODE_ERR_CARD_UPGRADE_CHEAT: 2201,  // error cheating card       
        
        //REWARD CHEST
        CODE_ERR_CHEAT_UNLOCK_CHEST: 2301,  // Cheating unlock chest
        CODE_ERR_OTHER_CHEST_OPENING: 2302,  // The other chest opening chest reward
        CODE_ERR_CHEAT_OPEN_CHEST: 2303,  // Cheating open chest
        CODE_ERR_NOT_TIME_OPEN_CHEST: 2304,  // error Not enough time to unlock reward
        CODE_ERR_FULL_STOCK: 2305,     // Full stock used
        CODE_ERR_ALL_REWARD_NOT_YET_UNLOCK: 2306,   //All reward not yet unlock
        CODE_ERR_REWARD_NOT_EXIST: 2307, //Reward is not exist
        CODE_ERR_NOT_ENOUGH_RUBY: 2308, // Not enough ruby to open reward
        CODE_ERR_ENOUGH_TIME_OPEN_CHEST: 2309, //Enough time for open chest
        CODE_ERR_CHEST_OPENED: 2310, //Chest was opended
        CODE_ERR_RANK_REWARD_OPENED: 2320,  //Already opened reward on rank list
        CODE_ERR_RANK_REWARD_NOT_EXIST_EGG: 2321,   //Not exist egg rank reward
        
        //TOTURIAL CAMPAIGN - REWARD
        CODE_ERR_CHEST_CAMPAIGN_COMPLETED: 2311, //Completed toturial campaign
        CODE_ERR_CHEST_CAMPAIGN_CHEAT_OPEN: 2312, //Already opened chest on toturial campaign
        CODE_ERR_CHEST_CAMPAIGN_NOT_COMPLETED: 2313, //Not completed toturial campaign
        
        //DAILY FREE CHEST
        CODE_ERR_CHEAT_DAILY_FREE_CHEST: 2350,  // Cheating open daily chest
        CODE_ERR_DAILY_FULL_FREE_CHEST: 2351,  // Full chest on day
        
        //ACHIEVEMENT
        CODE_ERR_CHEAT_OPEN_ACHIEVE: 2401, //Already opened achievement
        CODE_ERR_CHEAT_ACHIEVE_UNLOCK_CAMPAIGN: 2402, //Cheating unlock campaign reward achievement
        CODE_ERR_ACHIEVE_HAS_NOT_ENOUGTH_QUEST: 2403, //This achievement has not enougth to open reward
        
        //QUEST
        CODE_ERR_CHEAT_OPEN_QUEST: 2501, //Already opened Quest
                
        //LINK SOCIAL USER
        CODE_ERR_USER_SOCIAL_LINK: 2601, //Do you want to reload old player?
        CODE_ERR_FACEBOOK_TOKEN_INVALID: 2602, //Facebook token unavailable
        CODE_ERR_FACEBOOK_APP_INVALID: 2603, //Facebook app unavailable
        CODE_ERR_GOOGLE_TOKEN_INVALID: 2604, //Google token unavailable
        CODE_ERR_GOOGLE_TOKEN_EXPIRED: 2605, //Google token expired
        CODE_ERR_EXIST_OTHER_USER_SOCIAL_LINK: 2606, //Already exist other social linked
        
        //LINK DEVICE ACCOUNT
        CODE_ERR_LINK_DEVICE_DUPLICATE_PLAYER: 2701, //Confirm code with my self account 
        CODE_ERR_LINK_DEVICE_KEYCODE_EXPIRED: 2702, //Key code is expired
        CODE_ERR_LINK_DEVICE_KEYCODE_CHEAT: 2703,   //Cheating code key
        CODE_ERR_LINK_DEVICE_GEN_LIMIT: 2704,       //Limit generate code in day 
        CODE_ERR_ALREADY_DEVICE_LINKED: 2705,       //The current game has already been linked. The linking can be done only once 
        
        //BUY GOLD BY GEM
        CODE_ERR_GEM_NOT_ENOUGH_BUY_GOLD: 2801,     //You have not enough gem to buy gold        
        
        //BUY GEM FROM STORE SERVICE
        CODE_ERR_IAP_RECEPT_FAIL: 2901,     // Receipt is unavailable
        CODE_ERR_IAP_RECEIPT_EXIST: 2902,   // Receipt is exist
        CODE_ERR_IAP_SLOT_EXIST: 2903,      // Slot is exist
        
        //BUY EGG 
        CODE_ERR_IBSHOP_EGG_ENOUGH_GEM: 3001, //You have not enough gem to buy egg in IBShop
        
        //BUY CARD
        CODE_ERR_IBSHOP_CARD_NOT_ENOUGH_GOLD: 3030, //Not enough gold to buy card in IBShop
        CODE_ERR_IBSHOP_CARD_NOT_EXIST: 3031,       //Not exist card to buy in IBShop
        CODE_ERR_IBSHOP_CARD_ALREADY_BUYED_CARD: 3032,       //This card has already buyed
        
        
        
        
        ///////////////////////
        //// SETTING
        ///////////////////////
        APP_SECRET_KEY : 'SrZESdr6}YYqeV5=API_ZES_2017',
        APP_SECRET_KEY_OLD : 'API_ZES_2017',
        
        //CPU & RAM PERFORMANCE HOST
        DEF_CPU_FREE: 0.07, //10% CPU Free
        DEF_MEM_FREE: 100, //100MB memory free
        DEF_MB_SIZE: 1048576, //1MB
        DEF_CACHE_EXPIRED_OF_RESOURCE_OVERFLOAT: 2, //2 minutes
        
        //PWD INTERNAL
        DEF_PASSWD_INTER: "u}*wdr6}YYqeV5=",
        DEF_PRIVATE_HKEY: "SrZESu}*wdr6}YYqeV5=",
        DEF_PRIVATE_HKEY_CHEST_BOT: "SRWdr6}YYqeV5$2018@",
        DEF_PRIVATE_HKEY_TRACK_LOG: "L0g3rrWdr6}YYqeV5$2018@",
        
        //VNG INTERNAL API
        DEF_PASSWD_VNG_INTER: "7znEnJ94kDUn5Ux9",
        
        //FACEBOOK
        DEF_FACEBOOK_APPID: "919608554879808", //facebook appid test app
        
        //GOOGLE
//        DEF_GOOGLE_CLIENT_ID: "3432423423423-ipuho91j2hnk5k1rn6fc9k2mu504v497.apps.googleusercontent.com", //google client id
//        DEF_GOOGLE_CLIENT_SECRET: "JXEuDC1324dfd8JLVludwDF5lBu", //google client secret
    
        //LINK DEVICE
        DEF_LINK_DEVICE_LIMIT_TIME: 30, //Limit expire code link is 30 minutes
        DEF_LINK_DEVICE_LIMIT_GEN_CODE_TODAY: 3, //Limit generate code in day
        
        //TOKEN
        TOKEN_EXPIRED_IN_MINUTES: 240, //4hours
        
        ///////////////////////
        //// REMOVE UNDER
        ///////////////////////
        
	// START - DEFINE RETURN CODE REGION	
	CODE_ERR_INVALID_LOGIN : 101,
        
	CODE_ERR_INVALID_TOKEN : 102,
	CODE_ERR_INVALID_CARD : 103,
	CODE_ERR_INVALID_EMAIL : 104,
	CODE_ERR_INVALID_INFORMATION : 105,
	CODE_ERR_EMAIL_EXISTED : 106,
	CODE_ERR_INVALID_CARD_INSTANCE : 107,
	CODE_ERR_EXPIRED_CARD : 108,
	CODE_ERR_EMPTY_PARAMS : 109,
	CODE_ERR_INVALID_CARD_PASSCODE : 110,
	CODE_ERR_INVALID_CARD_OWNER : 111,
	CODE_ERR_INVALID_GENDER : 112,
	CODE_ERR_INVALID_AGE : 113,
	CODE_ERR_NOT_ENOUGH_QUANTITY : 114,
	CODE_ERR_INVALID_STATUS : 115,
	// END - DEFINE RETURN CODE REGION
	
	// START - DEFINE TEXT MESSAGES REGION
	TXT_SUCCESS : 'Success!',
	TXT_DATA_EMPTY : 'Data empty!',
	// END - DEFINE TEXT MESSAGES REGION
	
	//	0: Pending, 1: Approved / Actived, 2: Rejected / InActived
	// START - ACCOUNT STATUS
	ACCOUNT_PENDING : 0,
	ACCOUNT_APPROVED_ACTIVED : 1,
	ACCOUNT_REJECTED_INACTIVED : 2,
	// END - ACCOUNT STATUS
	
	// START - ACCOUNT TYPE
	ACCOUNT_IS_SUPPLIER : 1,
	ACCOUNT_IS_BUYER : 2,
	// END - ACCOUNT TYPE
	
	INIT_CREDITS : 50,
	LIMIT_PER_PAGE : 300,
	STATIC_IMG_URL : 'http://localhost/media/images/',		
	SEPARATOR : '-'
};
module.exports = CONSTANT;
