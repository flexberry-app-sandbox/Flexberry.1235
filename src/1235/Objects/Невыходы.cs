﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.1235
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Невыходы.
    /// </summary>
    // *** Start programmer edit section *** (Невыходы CustomAttributes)

    // *** End programmer edit section *** (Невыходы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НевыходыE", new string[] {
            "Дата as \'Дата\'",
            "Состояние as \'Состояние\'",
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Сотрудник.ФИО"})]
    [MasterViewDefineAttribute("НевыходыE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("НевыходыL", new string[] {
            "Дата as \'Дата\'",
            "Состояние as \'Состояние\'",
            "Сотрудник.ФИО as \'ФИО\'"})]
    public class Невыходы : ICSSoft.STORMNET.DataObject
    {
        
        private string fДата;
        
        private IIS.1235.Причины fСостояние;
        
        private IIS.1235.Сотрудник fСотрудник;
        
        // *** Start programmer edit section *** (Невыходы CustomMembers)

        // *** End programmer edit section *** (Невыходы CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Невыходы.Дата CustomAttributes)

        // *** End programmer edit section *** (Невыходы.Дата CustomAttributes)
        [StrLen(255)]
        public virtual string Дата
        {
            get
            {
                // *** Start programmer edit section *** (Невыходы.Дата Get start)

                // *** End programmer edit section *** (Невыходы.Дата Get start)
                string result = this.fДата;
                // *** Start programmer edit section *** (Невыходы.Дата Get end)

                // *** End programmer edit section *** (Невыходы.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Невыходы.Дата Set start)

                // *** End programmer edit section *** (Невыходы.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Невыходы.Дата Set end)

                // *** End programmer edit section *** (Невыходы.Дата Set end)
            }
        }
        
        /// <summary>
        /// Состояние.
        /// </summary>
        // *** Start programmer edit section *** (Невыходы.Состояние CustomAttributes)

        // *** End programmer edit section *** (Невыходы.Состояние CustomAttributes)
        public virtual IIS.1235.Причины Состояние
        {
            get
            {
                // *** Start programmer edit section *** (Невыходы.Состояние Get start)

                // *** End programmer edit section *** (Невыходы.Состояние Get start)
                IIS.1235.Причины result = this.fСостояние;
                // *** Start programmer edit section *** (Невыходы.Состояние Get end)

                // *** End programmer edit section *** (Невыходы.Состояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Невыходы.Состояние Set start)

                // *** End programmer edit section *** (Невыходы.Состояние Set start)
                this.fСостояние = value;
                // *** Start programmer edit section *** (Невыходы.Состояние Set end)

                // *** End programmer edit section *** (Невыходы.Состояние Set end)
            }
        }
        
        /// <summary>
        /// Невыходы.
        /// </summary>
        // *** Start programmer edit section *** (Невыходы.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Невыходы.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.1235.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Невыходы.Сотрудник Get start)

                // *** End programmer edit section *** (Невыходы.Сотрудник Get start)
                IIS.1235.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Невыходы.Сотрудник Get end)

                // *** End programmer edit section *** (Невыходы.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Невыходы.Сотрудник Set start)

                // *** End programmer edit section *** (Невыходы.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Невыходы.Сотрудник Set end)

                // *** End programmer edit section *** (Невыходы.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НевыходыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НевыходыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НевыходыE", typeof(IIS.1235.Невыходы));
                }
            }
            
            /// <summary>
            /// "НевыходыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НевыходыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НевыходыL", typeof(IIS.1235.Невыходы));
                }
            }
        }
    }
}
