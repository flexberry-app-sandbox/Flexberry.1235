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
    /// Табель.
    /// </summary>
    // *** Start programmer edit section *** (Табель CustomAttributes)

    // *** End programmer edit section *** (Табель CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТабельE", new string[] {
            "КонецС as \'Конец С\'",
            "НачалоС as \'Начало С\'"})]
    [AssociatedDetailViewAttribute("ТабельE", "График", "ГрафикE", true, "", "График", true, new string[] {
            ""})]
    [View("ТабельL", new string[] {
            "КонецС as \'Конец С\'",
            "НачалоС as \'Начало С\'"})]
    public class Табель : ICSSoft.STORMNET.DataObject
    {
        
        private string fКонецС;
        
        private string fНачалоС;
        
        private IIS.1235.DetailArrayOfГрафик fГрафик;
        
        // *** Start programmer edit section *** (Табель CustomMembers)

        // *** End programmer edit section *** (Табель CustomMembers)

        
        /// <summary>
        /// КонецС.
        /// </summary>
        // *** Start programmer edit section *** (Табель.КонецС CustomAttributes)

        // *** End programmer edit section *** (Табель.КонецС CustomAttributes)
        [StrLen(255)]
        public virtual string КонецС
        {
            get
            {
                // *** Start programmer edit section *** (Табель.КонецС Get start)

                // *** End programmer edit section *** (Табель.КонецС Get start)
                string result = this.fКонецС;
                // *** Start programmer edit section *** (Табель.КонецС Get end)

                // *** End programmer edit section *** (Табель.КонецС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Табель.КонецС Set start)

                // *** End programmer edit section *** (Табель.КонецС Set start)
                this.fКонецС = value;
                // *** Start programmer edit section *** (Табель.КонецС Set end)

                // *** End programmer edit section *** (Табель.КонецС Set end)
            }
        }
        
        /// <summary>
        /// НачалоС.
        /// </summary>
        // *** Start programmer edit section *** (Табель.НачалоС CustomAttributes)

        // *** End programmer edit section *** (Табель.НачалоС CustomAttributes)
        [StrLen(255)]
        public virtual string НачалоС
        {
            get
            {
                // *** Start programmer edit section *** (Табель.НачалоС Get start)

                // *** End programmer edit section *** (Табель.НачалоС Get start)
                string result = this.fНачалоС;
                // *** Start programmer edit section *** (Табель.НачалоС Get end)

                // *** End programmer edit section *** (Табель.НачалоС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Табель.НачалоС Set start)

                // *** End programmer edit section *** (Табель.НачалоС Set start)
                this.fНачалоС = value;
                // *** Start programmer edit section *** (Табель.НачалоС Set end)

                // *** End programmer edit section *** (Табель.НачалоС Set end)
            }
        }
        
        /// <summary>
        /// Табель.
        /// </summary>
        // *** Start programmer edit section *** (Табель.График CustomAttributes)

        // *** End programmer edit section *** (Табель.График CustomAttributes)
        public virtual IIS.1235.DetailArrayOfГрафик График
        {
            get
            {
                // *** Start programmer edit section *** (Табель.График Get start)

                // *** End programmer edit section *** (Табель.График Get start)
                if ((this.fГрафик == null))
                {
                    this.fГрафик = new IIS.1235.DetailArrayOfГрафик(this);
                }
                IIS.1235.DetailArrayOfГрафик result = this.fГрафик;
                // *** Start programmer edit section *** (Табель.График Get end)

                // *** End programmer edit section *** (Табель.График Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Табель.График Set start)

                // *** End programmer edit section *** (Табель.График Set start)
                this.fГрафик = value;
                // *** Start programmer edit section *** (Табель.График Set end)

                // *** End programmer edit section *** (Табель.График Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТабельE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТабельE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТабельE", typeof(IIS.1235.Табель));
                }
            }
            
            /// <summary>
            /// "ТабельL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТабельL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТабельL", typeof(IIS.1235.Табель));
                }
            }
        }
    }
}
