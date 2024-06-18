import { gql } from '@apollo/client/core';
//queries
export const COMPANY_QUERY = gql`
    query company($company_id: String!) {
        company(company_id: $company_id) {
            company_id,
            user_id,
            plan_id,
            company_name,
            description_company,
            company_email,
            src_logo,
            company_phone,
            region,
            city,
            address,
            google_map_link
        }
    }
`;
//mutations
export const UPDATE_COMPANY_MUTATION = gql`
    mutation updateCompany(
        $company_id: String!,
        $company_name: String,
        $description_company: String,
        $company_email: String,
        $src_logo: String,
        $company_phone: String,
        $region: String,
        $city: String,
        $address: String,
        $google_map_link: String
    ) {
        updateCompany(
            company_id: $company_id,
            company_name: $company_name,
            description_company: $description_company,
            company_email: $company_email,
            src_logo: $src_logo,
            company_phone: $company_phone,
            region: $region,
            city: $city,
            address: $address,
            google_map_link: $google_map_link
        ) {
            company_id,
            company_name,
            description_company,
            company_email,
            src_logo,
            company_phone,
            region,
            city,
            address,
            google_map_link
        }
    }
`;
