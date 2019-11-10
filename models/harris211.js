module.exports = function (sequelize, DataTypes) {
  const harris211 = sequelize.define("harris211", {
    report_number: {
      type: DataTypes.INTEGER,
      default: null
    },
    date_of_call_start_text: {
      type: DataTypes.STRING,
      default: null
    },
    date_of_call_end_text: {
      type: DataTypes.STRING,
      default: null
    },
    length_of_call_minutes: {
      type: DataTypes.INTEGER,
      default: null
    },
    age: {
      type: DataTypes.STRING,
      default: null
    }, 
    gender: {
      type: DataTypes.STRING,
      default: null
    }, 
    military_status: {
      type: DataTypes.STRING,
      default: null
    }, 
    military_branch_veteran: {
      type: DataTypes.STRING,
      default: null
    }, 
    military_branch_active_duty: {
      type: DataTypes.STRING,
      default: null
    }, 
    preferred_language: {
      type: DataTypes.STRING,
      default: null
    },
    other_language: {
      type: DataTypes.STRING,
      default: null
    }, 
    zip_code: {
      type: DataTypes.STRING,
      default: null
    },
    city: {
      type: DataTypes.STRING,
      default: null
    }, 
    county: {
      type: DataTypes.STRING,
      default: null
    },
    need_name: {
      type: DataTypes.STRING,
      default: null
    }, 
    need_taxonomy_code: {
      type: DataTypes.STRING,
      default: null
    }, 
    met_or_reason_unmet: {
      type: DataTypes.STRING,
      default: null
    }, 
    parent_agency_name: {
      type: DataTypes.STRING,
      default: null
    },
    parent_agency_identifier: {
      type: DataTypes.STRING,
      default: null
    },

    referral_name: {
      type: DataTypes.STRING,
      default: null
    },

    referral_identifier: {
      type: DataTypes.STRING,
      default: null
    },

    benefits_information_call: {
      type: DataTypes.STRING,
      default: null
    },

    benefits_referral_call: {
      type: DataTypes.STRING,
      default: null
    },

    benefits_transfer_call: {
      type: DataTypes.STRING,
      default: null
    },

    first_time_user: {
      type: DataTypes.STRING,
      default: null
    },

    referral_source_first_time_user: {
      type: DataTypes.STRING,
      default: null
    },

    other_referral_source_first_time_user: {
      type: DataTypes.STRING,
      default: null
    },
    },{
      freezeTableName: true
    });
return harris211;
};

