import './styles/global.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Active from './pages/MaintenanceMessages/Active/Active';
import CorrelatedFdes from './pages/MaintenanceMessages/Active/CorrelatedFdes';
import HistoricalByDate from './pages/MaintenanceMessages/HistoricalByAta/HistoricalByAta';
import MaintenanceMessagesPage from './pages/MaintenanceMessages/MaintenanceMessages';
import PresentLeg from './pages/MaintenanceMessages/PresentLeg/PresentLeg';
import TimeOrderedViews from './pages/MaintenanceMessages/TimeOrderedViews/TimeOrderedViews';
import TmoActive from './pages/MaintenanceMessages/TimeOrderedViews/Active';
import CurrentLeg from './pages/MaintenanceMessages/TimeOrderedViews/CurrentLeg';
import LastSevenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastSevenDays';
import LastFourteenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastFourteenDays';
import SelectDateRange from './pages/MaintenanceMessages/TimeOrderedViews/SelectDateRange';
import SystemDiagnostics from './pages/SystemDiagnostics/SystemDiagnostics';
import DuFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/DuFanStatus';
import MauFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus';
import MauFanStatus1 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus1';
import MauFanStatus2 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus2';
import MauFanStatus3 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus3';
import ControlOneStatus from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus';
import ControlOneStatus1 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus1';
import ControlOneStatus2 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus2';
import AccStatusLeft from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft';
import AccStatusLeft1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft1';
import AccStatusLeft2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft2';
import AccStatusLeft3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft3';
import AccStatusLeft4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft4';
import AccStatusLeft5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft5';
import AccStatusLeft6 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft6';
import AccStatusLeft7 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft7';
import AccStatusRight from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight';
import AccStatusRight1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight1';
import AccStatusRight2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight2';
import AccStatusRight3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight3';
import AccStatusRight4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight4';
import AccStatusRight5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight5';
import GPSwitchStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus';
import GPSwitchStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus1';
import GPSwitchStatus2 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus2';
import ATOneATQAInterfacePre from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfacePre';
import ATOneATQAInterfaceStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfaceStatus';
import ATOneATQAInterfaceStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfaceStatus1';
import TQAStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus';
import TQAStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus1';
import TQAStatus2 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus2';
import CauTestStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/CauTestStatus';
import NimStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/NimStatus';
import BusDiagnosticStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus';
import BusDiagnosticStatus1 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus1';
import BusDiagnosticStatus2 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus2';
import BusDiagnosticStatus3 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus3';
import BusDiagnosticStatus4 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus4';
import BusDiagnosticStatus5 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus5';
import BusDiagnosticData from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData';
import BusDiagnosticData1 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData1';
import BusDiagnosticData2 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData2';
import BusDiagnosticData3 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData3';
import BusDiagnosticData4 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData4';
import BusDiagnosticData5 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData5';
import SatcomStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/FifteenSateliteCommunications/SatcomStatus';
import CvrStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/SeventyTwoCockpitVoiceRecorder/CvrStatus';
import GcuGenStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus';
import GcuGenStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus1';
import GcuGenStatus2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus2';
import RatContactorStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyThreeRamAirTurbine/RatContactorStatus';
import RatPower from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyThreeRamAirTurbine/RatPower';
import GcuGenStatusLeft from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft';
import GcuGenStatusLeft1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft1';
import GcuGenStatusLeft2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft2';
import GcuGenStatusLeft3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft3';
import PpdlBpcuStatusLeft from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft';
import PpdlBpcuStatusLeft1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft1';
import PpdlBpcuStatusLeft2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft2';
import PpdlBpcuStatusLeft3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft3';
import PpdlBpcuStatusLeft4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft4';
import PpdlPdbPowerStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus';
import PpdlPdbPowerStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus1';
import PpdlPdbPowerStatus2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus2';
import PpdlPdbPowerStatus3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus3';
import PpdlPdbPowerStatus4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus4';
import PpdlPdbPowerStatus5 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus5';
import PpdlPdbPowerStatus6 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus6';
import PpdlPdbPowerStatus7 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus7';
import PpdlPdbPowerStatus8 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus8';
import PpdlBpcuStatusRight from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight';
import PpdlBpcuStatusRight1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight1';
import PpdlBpcuStatusRight2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight2';
import PpdlBpcuStatusRight3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight3';
import PpdlBpcuStatusRight4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight4';
import PpdlPdbPowerStatusRight from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight';
import PpdlPdbPowerStatusRight1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight1';
import PpdlPdbPowerStatusRight10 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight10';
import PpdlPdbPowerStatusRight11 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight11';
import PpdlPdbPowerStatusRight2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight2';
import PpdlPdbPowerStatusRight3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight3';
import PpdlPdbPowerStatusRight4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight4';
import PpdlPdbPowerStatusRight5 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight5';
import PpdlPdbPowerStatusRight6 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight6';
import PpdlPdbPowerStatusRight7 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight7';
import PpdlPdbPowerStatusRight8 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight8';
import PpdlPdbPowerStatusRight9 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight9';
import EbhaBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EbhaBatteryStatus';
import EmergencyBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EmergencyBatteryStatus';
import EmergencyBatteryStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EmergencyBatteryStatus1';
import ShipBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/ShipBatteryStatus';
import UpsBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/UpsBatteryStatus';
import Ohp1Status from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1Status';
import Ohp1Status1 from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1Status1';
import Ohp1SwStatus from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1SwStatus';
import Ohp1SwStatus1 from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1SwStatus1';
import Left from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Left';
import Left1 from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Left1';
import Right from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Right';
import Right1 from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Right1';
import OverheatDetection from './pages/SystemDiagnostics/TwentySixFireProtection/FourteenEquipmentAreaOverheatDetection/OverheatDetection';
import OverheatDetection1 from './pages/SystemDiagnostics/TwentySixFireProtection/FourteenEquipmentAreaOverheatDetection/OverheatDetection1';
import AirDataStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus1';
import AirDataStatus7 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus7';
import AirDataStatus6 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus6';
import AirDataStatus5 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus5';
import AirDataStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus4';
import AirDataStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus3';
import AirDataStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus2';
import Ahrs1Status1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status1';
import Ahrs1Status4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status4';
import Ahrs1Status3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status3';
import Ahrs1Status2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status2';
import HudCombinerStatus from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudCombinerStatus';
import HudHpmContents from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudHpmContents';
import HudStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus1';
import HudStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus2';
import HudStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus3';
import HudStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus4';
import HudStatus5 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus5';
import Sfd1Status from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySevenStandbyFlightDisplay/Sfd1Status';
import EvsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus1';
import EvsStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus4';
import EvsStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus3';
import EvsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus2';
import IrsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus1';
import IrsStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus3';
import IrsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus2';
import WeatherRadarCntrllerStatus from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyFoyrWeatherRadar/WeatherRadarCntrllerStatus';
import Egpvm1ApmConfigOpt1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt1';
import Egpvm1ApmConfigOpt6 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt6';
import Egpvm1ApmConfigOpt7 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt7';
import Egpvm1ApmConfigOpt8 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt8';
import Egpvm1ApmConfigOpt2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt2';
import Egpvm1ApmConfigOpt3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt3';
import Egpvm1ApmConfigOpt4 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt4';
import Egpvm1ApmConfigOpt5 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt5';
import Egpvm1ApmRaasConfigOpt1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt1';
import Egpvm1ApmRaasConfigOpt2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt2';
import Egpvm1ApmRaasConfigOpt3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt3';
import Egpvm1ApmRaasConfigOpt4 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt4';
import Egpvm1ApmRaasConfigOpt5 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt5';
import Egpvm1ApmRaasConfigOpt6 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt6';
import Egpvm1ApmRaasConfigOpt7 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt7';
import Egpvm1ApmRaasConfigOpt8 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt8';
import Egpvm1ApmRaasConfigOpt9 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt9';
import Egpvm1ApmRaasConfigOpt10 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt10';
import Egpvm1ApmRaasConfigOpt11 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt11';
import Egpvm1ApmRaasConfigOpt12 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt12';
import Egpvm1ApmRaasConfigOpt13 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt13';
import Egpvm1ApmRaasConfigOpt14 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt14';
import Egpvm1ApmRaasConfigOpt15 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt15';
import Egpvm1ApmRaasConfigOpt16 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt16';
import Egpvm1ApmRaasConfigOpt17 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt17';
import Egpvm1ApmRaasConfigOpt18 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt18';
import Egpvm1ApmRaasConfigOpt19 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt19';
import Egpvm1ApmRaasConfigOpt20 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt20';
import EgpwmCoockpitSelections from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/EgpwmCoockpitSelections';
import GpsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsStatus1';
import GpsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsStatus2';
import GpsClock1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsClock1';
import GpsClock2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsClock2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenancemessages" element={<MaintenanceMessagesPage />} />
        <Route path="/maintenancemessages/active" element={<Active />} />
        <Route path="/maintenancemessages/active/correlatedfdes" element={<CorrelatedFdes />} />
        <Route path="/maintenancemessages/presentleg" element={<PresentLeg />} />
        <Route path="/maintenancemessages/historicalbydate" element={<HistoricalByDate />} />
        <Route path="/maintenancemessages/timeorderedviews" element={<TimeOrderedViews />} />
        <Route path="/maintenancemessages/timeorderedviews/active" element={<TmoActive />} />
        <Route path="/maintenancemessages/timeorderedviews/currentleg" element={<CurrentLeg />} />
        <Route path="/maintenancemessages/timeorderedviews/lastsevendays" element={<LastSevenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/lastfourteendays" element={<LastFourteenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/selectdaterange" element={<SelectDateRange />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/dufanstatus" element={<DuFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus" element={<MauFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus1" element={<MauFanStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus2" element={<MauFanStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus3" element={<MauFanStatus3 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus" element={<ControlOneStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus1" element={<ControlOneStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus2" element={<ControlOneStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft" element={<AccStatusLeft />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft1" element={<AccStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft2" element={<AccStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft3" element={<AccStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft4" element={<AccStatusLeft4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft5" element={<AccStatusLeft5 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft6" element={<AccStatusLeft6 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft7" element={<AccStatusLeft7 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright" element={<AccStatusRight />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright1" element={<AccStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright2" element={<AccStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright3" element={<AccStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright4" element={<AccStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright5" element={<AccStatusRight5 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus" element={<GPSwitchStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus1" element={<GPSwitchStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus2" element={<GPSwitchStatus2 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacepre" element={<ATOneATQAInterfacePre />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus" element={<ATOneATQAInterfaceStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus1" element={<ATOneATQAInterfaceStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus" element={<TQAStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus1" element={<TQAStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus2" element={<TQAStatus2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/cauteststatus" element={<CauTestStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/nimstatus" element={<NimStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus" element={<BusDiagnosticStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus1" element={<BusDiagnosticStatus1 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus2" element={<BusDiagnosticStatus2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus3" element={<BusDiagnosticStatus3 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus4" element={<BusDiagnosticStatus4 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus5" element={<BusDiagnosticStatus5 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata" element={<BusDiagnosticData />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata1" element={<BusDiagnosticData1 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata2" element={<BusDiagnosticData2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata3" element={<BusDiagnosticData3 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata4" element={<BusDiagnosticData4 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata5" element={<BusDiagnosticData5 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/fifteensatelitecommunications/satcomstatus" element={<SatcomStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/seventytwocockpitvoicerecorder/cvrstatus" element={<CvrStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus" element={<GcuGenStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus1" element={<GcuGenStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus2" element={<GcuGenStatus2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratcontactorstatus" element={<RatContactorStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratpower" element={<RatPower />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft" element={<GcuGenStatusLeft />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft1" element={<GcuGenStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft2" element={<GcuGenStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft3" element={<GcuGenStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft" element={<PpdlBpcuStatusLeft />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft1" element={<PpdlBpcuStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft2" element={<PpdlBpcuStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft3" element={<PpdlBpcuStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft4" element={<PpdlBpcuStatusLeft4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus" element={<PpdlPdbPowerStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus1" element={<PpdlPdbPowerStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus2" element={<PpdlPdbPowerStatus2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus3" element={<PpdlPdbPowerStatus3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus4" element={<PpdlPdbPowerStatus4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus5" element={<PpdlPdbPowerStatus5 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus6" element={<PpdlPdbPowerStatus6 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus7" element={<PpdlPdbPowerStatus7 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus8" element={<PpdlPdbPowerStatus8 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright" element={<PpdlBpcuStatusRight />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright1" element={<PpdlBpcuStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright2" element={<PpdlBpcuStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright3" element={<PpdlBpcuStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright4" element={<PpdlBpcuStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright" element={<PpdlPdbPowerStatusRight />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright1" element={<PpdlPdbPowerStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright2" element={<PpdlPdbPowerStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright3" element={<PpdlPdbPowerStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright4" element={<PpdlPdbPowerStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright5" element={<PpdlPdbPowerStatusRight5 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright6" element={<PpdlPdbPowerStatusRight6 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright7" element={<PpdlPdbPowerStatusRight7 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright8" element={<PpdlPdbPowerStatusRight8 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright9" element={<PpdlPdbPowerStatusRight9 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright10" element={<PpdlPdbPowerStatusRight10 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright11" element={<PpdlPdbPowerStatusRight11 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/ebhabatterystatus" element={<EbhaBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus" element={<EmergencyBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus1" element={<EmergencyBatteryStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/shipbatterystatus" element={<ShipBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/upsbatterystatus" element={<UpsBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status" element={<Ohp1Status />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status1" element={<Ohp1Status1 />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus" element={<Ohp1SwStatus />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus1" element={<Ohp1SwStatus1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/left" element={<Left />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/left1" element={<Left1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/right" element={<Right />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/right1" element={<Right1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection" element={<OverheatDetection />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection1" element={<OverheatDetection1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus1" element={<AirDataStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus2" element={<AirDataStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus3" element={<AirDataStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus4" element={<AirDataStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus5" element={<AirDataStatus5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus6" element={<AirDataStatus6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus7" element={<AirDataStatus7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status1" element={<Ahrs1Status1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status2" element={<Ahrs1Status2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status3" element={<Ahrs1Status3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status4" element={<Ahrs1Status4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudcombinerstatus" element={<HudCombinerStatus />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudhpmcontents" element={<HudHpmContents />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus1" element={<HudStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus2" element={<HudStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus3" element={<HudStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus4" element={<HudStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus5" element={<HudStatus5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysevenstandbyflightdisplay/sfd1status" element={<Sfd1Status />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus1" element={<EvsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus2" element={<EvsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus3" element={<EvsStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus4" element={<EvsStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus1" element={<IrsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus2" element={<IrsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus3" element={<IrsStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortyfourweatherradar/weatherradarcntrllerstatus" element={<WeatherRadarCntrllerStatus />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt1" element={<Egpvm1ApmConfigOpt1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt2" element={<Egpvm1ApmConfigOpt2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt3" element={<Egpvm1ApmConfigOpt3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt4" element={<Egpvm1ApmConfigOpt4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt5" element={<Egpvm1ApmConfigOpt5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt6" element={<Egpvm1ApmConfigOpt6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt7" element={<Egpvm1ApmConfigOpt7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt8" element={<Egpvm1ApmConfigOpt8 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt1" element={<Egpvm1ApmRaasConfigOpt1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt2" element={<Egpvm1ApmRaasConfigOpt2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt3" element={<Egpvm1ApmRaasConfigOpt3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt4" element={<Egpvm1ApmRaasConfigOpt4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt5" element={<Egpvm1ApmRaasConfigOpt5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt6" element={<Egpvm1ApmRaasConfigOpt6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt7" element={<Egpvm1ApmRaasConfigOpt7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt8" element={<Egpvm1ApmRaasConfigOpt8 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt9" element={<Egpvm1ApmRaasConfigOpt9 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt10" element={<Egpvm1ApmRaasConfigOpt10 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt11" element={<Egpvm1ApmRaasConfigOpt11 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt12" element={<Egpvm1ApmRaasConfigOpt12 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt13" element={<Egpvm1ApmRaasConfigOpt13 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt14" element={<Egpvm1ApmRaasConfigOpt14 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt15" element={<Egpvm1ApmRaasConfigOpt15 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt16" element={<Egpvm1ApmRaasConfigOpt16 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt17" element={<Egpvm1ApmRaasConfigOpt17 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt18" element={<Egpvm1ApmRaasConfigOpt18 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt19" element={<Egpvm1ApmRaasConfigOpt19 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt20" element={<Egpvm1ApmRaasConfigOpt20 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpwmcoockpitselections" element={<EgpwmCoockpitSelections />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus1" element={<GpsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus2" element={<GpsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock1" element={<GpsClock1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock2" element={<GpsClock2 />} />
      </Routes>
    </Router>
  );
}

export default App;
