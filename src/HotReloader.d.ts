export type Context = {
	originalModule: ModuleScript;
	isReloading: boolean;
};

export class HotReloader {
	/**
	 * Creates a new HotReloader.
	 */
	public constructor();

	/**
	 * Cleans up this HotReloader, forgetting about any previously modules that were being listened to.
	 */
	public destroy(): void;

	/**
	 * Listens to changes from a single module.
	 *
	 * Runs the given `callback` once to start, and then again whenever the module changes.
	 *
	 * Both are passed a [Context] object, which contains information about the original module
	 * and whether or not the script is reloading.
	 *
	 * - For `callback`, `Context.isReloading` is true if running as a result of a hot-reload (false indicates first run).
	 * - For `cleanup`, `Context.isReloading` is true if the module is about to be hot-reloaded (false indicates this is the last cleanup).
	 *
	 * @param module The original module to attach listeners to
	 * @param callback A callback that runs when the ModuleScript is added or changed
	 * @param cleanup A callback that runs when the ModuleScript is changed or removed
	 */
	public listen(
		module: ModuleScript,
		callback: (module: ModuleScript, context: Context) => void,
		cleanup: (module: ModuleScript, context: Context) => void,
	): void;

	/**
	 * Scans current and new descendants of an object for ModuleScripts, and runs `callback` for each of them.
	 *
	 * This function has the same semantics as {@link HotReloader.listen}
	 *
	 * @param container The root instance.
	 * @param callback A callback that runs when the ModuleScript is added or changed
	 * @param cleanup A callback that runs when the ModuleScript is changed or removed
	 */
	public scan(
		container: Instance,
		callback: (module: ModuleScript, context: Context) => void,
		cleanup: (module: ModuleScript, context: Context) => void,
	): void;
}
