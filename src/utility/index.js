// All server side options and date opration perform here

import moment from "moment";
import { privateRequest } from "../api/axiosConfig/privateRequest";

import { toast } from "react-toastify";

export const configToast = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

export const showSuccessNotification = (message, configToast) => {
  return toast.success(message, configToast);
};

export const showErrorNotification = (message, configToast) => {
  return toast.error(message, configToast);
};

export const showDeleteNotification = (message, configToast) => {
  return toast.success(message, configToast);
};

// taking input as '2021-12-03' output will be in 0.5 year, 1 year, 2 year and so on
export const calculateDateToString = (date) => {
  const exp_date = moment().diff(new Date(date), "month");
  const difference = (exp_date / 12).toString();
  return difference.substring(difference.length - 2, difference.length) === ".5"
    ? exp_date / 12
    : Math.round(exp_date / 12);
};

// take input as 0.5 year and return '2021-12-03' from today
export const calculateStringToDate = (yearOfExp) => {
  const monthsBack = +yearOfExp.split(" ")[0] * 12;
  const exp = new Date(moment().subtract(monthsBack, "months"));
  return moment(exp).format("YYYY-MM-DD");
};

export const formatDate = (date) => {
  const convert = new Date(date);
  return moment(convert).format("YYYY-MM-DD");
};

// options

// technologyOptions are for => languages and otherlanguages
export const technologyOptionsUtility = async (label_name, value_name) => {
  const { data: tech } = await privateRequest("/technology");
  const tOptions = tech?.data?.technologies?.map((t) => {
    return {
      label: t[label_name],
      value: `${t[value_name]}`,
    };
  });
  return tOptions;
};

export const vendorOptionsUtility = async (label_name, value_name) => {
  const { data: vend } = await privateRequest("/vendor");
  const vOptions = vend?.data?.vendors?.map((t) => {
    return {
      label: t[label_name],
      value: `${t[value_name]}`,
    };
  });
  return vOptions;
};

export const externalResourceOptionsUtility = async (
  label_name,
  value_name
) => {
  const { data: exRes } = await privateRequest("/external-resource");
  const exOptions = exRes?.data?.externalResource?.map((t) => {
    return {
      label: `${t.fname} ${t.lname}`,
      value: `${t.id}`,
    };
  });
  return exOptions;
};

export const externalResourceByDefaultValuesUtility = async (value) => {
  const { data: exRes } = await privateRequest(`/external-resource/${value}`);
  const { fname, lname, email, phone } = exRes?.data?.externalResource;
  return { fname, lname, email, phone };
};

export const resourceByDefaultValuesUtility = async (value) => {
  const { data: resRes } = await privateRequest(`/resource/${value}`);
  console.log("resRes", resRes);
  const { email } = resRes?.data?.resource;
  // return {  email };
  const resources_email = email;
  return { resources_email };
};

export const joiningByDefaultValuesUtility = async (value) => {
  const { data: joinRes } = await privateRequest(`/joining/${value}`);
  console.log("joinininin", joinRes);
  const { client_id, end_date, client, resource_id, id } =
    joinRes?.data?.joining;

  const clients = client.client_name;


  return { clients, resource_id, client_id };
};

export const clientByDefaultValuesUtility = async (value) => {
  const { data: resRes } = await privateRequest(`/client/${value}`);
  console.log("clients from deropdown", resRes);
  const {
    reporting_name,
    reporting_email,
    reporting_contact,
    account_name,
    account_email,
    address,
  } = resRes?.data?.client;
  return {
    reporting_name,
    reporting_email,
    reporting_contact,
    account_name,
    account_email,
    address,
  };
};

export const clientOptionsUtility = async (label_name, value_name) => {
  const { data: clientRes } = await privateRequest("/client");
  const clOptions = clientRes?.data?.clients?.map((t) => {
    return {
      // label: t[label_name],
      label: t.client_name,
      value: t.id,
    };
  });
  return clOptions;
};

//Joining Option Utlity
export const joiningOptionsUtility = async (label_name, value_name) => {
  const { data: joinRes } = await privateRequest("/joining");
  console.log("joinRes", joinRes);
  const joinOptions = joinRes?.data?.joining?.map((t) => {
    console.log(t)
    return {
      // label: t[label_name],
      // label: `${t?.resource?.fname} ${t?.resource?.lname}`,
      label: `${t?.fname} ${t?.lname}`,
      value: { joining_id: t.id, resource_id: t.resource_id }
    };
  });
  return joinOptions;
};

export const reqclientOptionsUtility = async (label_name, id) => {
  const { data: rclientRes } = await privateRequest("/client");
  console.log(rclientRes, "newsched");
  const rclOptions = rclientRes?.data?.clients?.map((t) => {
    return {
      id: t[id],
      label: t[label_name],
      value: `${t[id]}`,
    };
  });
  return rclOptions;
};

export const resourceOptionsUtility = async (label_name, value_name) => {
  const { data: resRes } = await privateRequest("/resource");
  const resOptions = resRes?.data?.resources.map((t) => {
    return {
      label: `${t.fname} ${t.lname}`,
      value: t[value_name],
    };
  });
  return resOptions;
};

export const reasonOptionsUtility = async (label_name, value_name) => {
  const { data: resRes } = await privateRequest("/reason");
  const resOptions = resRes?.data?.reasonData.map((t) => {
    return {
      label: `${t.description}`,
      value: `${t.description}`,
    };
  });
  return resOptions;
};

export const nicknameOptionsUtility = async (nickname, value_name) => {
  const { data: resRes } = await privateRequest("/resource");
  const resOptions = resRes?.data?.resources.map((t) => {
    const vendorName = t.vendor ? t.vendor.company_name : "";
    return {
      label: vendorName,
      value: t[value_name],
    };
  });
  return resOptions;
};

export const externlaProductUtility = async (label_name, value_name) => {
  const { data: resProduct } = await privateRequest("/external-products");
  const exPOptions = resProduct?.data?.product.map((t) => {
    return {
      label: `${t.name}`,
      value: `${t.name}`,
    };
  });
  return exPOptions;
};

// experience options
export const experienceOptions = [
  { label: "0.5 year", value: "0.5 year" },
  { label: "1 year", value: "1 year" },
  { label: "1.5 year", value: "1.5 year" },
  { label: "2 year", value: "2 year" },
  { label: "2.5 year", value: "2.5 year" },
  { label: "3 year", value: "3 year" },
  { label: "3.5 year", value: "3.5 year" },
  { label: "4 year", value: "4 year" },
  { label: "4.5 year", value: "4.5 year" },
  { label: "5 year", value: "5 year" },
  { label: "5.5 year", value: "5.5 year" },
  { label: "6 year", value: "6 year" },
  { label: "6.5 year", value: "6.5 year" },
  { label: "7 year", value: "7 year" },
  { label: "7.5 year", value: "7.5 year" },
  { label: "8 year", value: "8 year" },
  { label: "8.5 year", value: "8.5 year" },
  { label: "9 year", value: "9 year" },
  { label: "9.5 year", value: "9.5 year" },
  { label: "10 year", value: "10 year" },
  { label: "10.5 year", value: "10.5 year" },
  { label: "11 year", value: "11 year" },
  { label: "11.5 year", value: "11.5 year" },
  { label: "12 year", value: "12 year" },
  { label: "12.5 year", value: "12.5 year" },
];

// export const scheduleByOptionsUtility = [
//     { label: "Schedule By 1", value: "scheduleBy1" },
//     // { label: "Schedule By 2", value: "scheduleBy2" },
//     // { label: "Schedule By 3", value: "scheduleBy3" },
//     // { label: "Schedule By 4", value: "scheduleBy4" },
//   ];

export const scheduleByOptionsUtility = async (
  name,
  id,
  label_name,
  value_name
) => {
  const { data: schedRes } = await privateRequest("/user");
  console.log(schedRes, "newsched");
  const sOptions = schedRes?.data?.users
    .filter((t) => t.name !== null)
    .map((t) => {


      return {
        // label: t[label_name],
        // value: `${t[value_name]}`
        label: t[name],
        value: t[id],
      };
    });
  console.log(sOptions, "newsoptions");
  return sOptions;
};

// Mode Of Interview
export const modeOfInterviewOptions = [
  { label: "Telephonic", value: "Telephonic" },
  { label: "F2F", value: "F2F" },
  { label: "Skype", value: "Skype" },
  { label: "Google Hangout", value: "Google Hangout" },
  { label: "Zoom ", value: "Zoom" },
  { label: "Google Meet", value: "Google Meet" }
];

//Interview location
export const interviewLocationOptions = [
  { key: "Client Office", value: "Client Office" },
  { key: "Nimap Office", value: "Nimap Office" },
  { key: "Home", value: "home" },
];

//Interview Type
export const interviewTypeOptions = [
  { key: "L1", value: "L1" },
  { key: "L2", value: "L2" },
  { key: "Final", value: "final" },
];

//l1 types
export const l1TypeOption = [
  { key: "L1", value: "L1" },
  // { key: "L2", value: "L2" },
  // { key: "Final", value: "Final" },
];

//for making first letter capital 
export const firstLetterCapital = (word) => {
  if (word) {
    const firstLetter = word.charAt(0).toUpperCase()
    const wordToChar = word.split("")
    return firstLetter.concat(wordToChar.slice(1).join(""))
  }
  return ""

}

export const capitalizeString = str => {
  return str.split(" ").map(x => x[0]?.toUpperCase() + x.slice(1)).join(" ")
}

export const getCurrentRoleId = () => {
  return JSON.parse(localStorage.getItem("authUser"))?.roleId
}

export const getCurrentPagePermissions = (permissions, moduleName, entityName) => {
  return permissions?.find(moduleData => moduleData?.moduleName === moduleName)
    ?.entity?.find(entity => entity?.entityName === entityName)
    ?.permission?.reduce((acc, permission) => {
      acc[permission?.actionName] = permission?.isSelected
      return acc
    }, {})
}