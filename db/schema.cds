namespace RiskManagementApp;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

entity RM_Risks
{
    key ID : UUID;
    title : String(100);
    prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    rm_miti : Association to one RM_Mitigations;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity RM_Mitigations
{
    key ID : UUID;
    createdAt : String(100);
    createdBy : String(100);
    description : String(100);
    owner : String(100);
    timeline : String(100);
    rm_risks : Association to many RM_Risks on rm_risks.rm_miti = $self;
}
