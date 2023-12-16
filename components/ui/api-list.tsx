"use cliet";

import { useParams } from "next/navigation";

import { useOrgin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    enitityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    enitityName,
    entityIdName
}) => {
    const params = useParams();
    const origin = useOrgin();

    const baseUrl = `${origin}/api/${params.storeId}`
    return (
        <>
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${enitityName}`} 
            />
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${enitityName}/(${entityIdName})`} 
            />
            <ApiAlert
                title="POST"
                variant="admin"
                description={`${baseUrl}/${enitityName}`} 
            />
            <ApiAlert
                title="PATCH"
                variant="admin"
                description={`${baseUrl}/${enitityName}/(${entityIdName})`} 
            />
            <ApiAlert
                title="DELETE"
                variant="admin"
                description={`${baseUrl}/${enitityName}/(${entityIdName})`} 
            />
        </>
    )
}