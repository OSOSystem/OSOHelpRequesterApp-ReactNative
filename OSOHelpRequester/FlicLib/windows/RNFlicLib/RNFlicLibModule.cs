using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Flic.Lib.RNFlicLib
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNFlicLibModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNFlicLibModule"/>.
        /// </summary>
        internal RNFlicLibModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNFlicLib";
            }
        }
    }
}
