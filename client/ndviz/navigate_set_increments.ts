/**
 * @license
 * Copyright 2016 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Viewer} from 'ndviz/viewer';
import {vec3} from 'neuroglancer/util/geom';
import {registerActionListener} from 'neuroglancer/util/event_action_map';

export function setupMultiStepIncrement(viewer: Viewer) {
    registerActionListener(viewer.element, 'z-=10', () => viewer.navigationState.pose.translateVoxelsRelative(vec3.fromValues(0, 0, -10)));

    registerActionListener(viewer.element, 'z+=10', () => viewer.navigationState.pose.translateVoxelsRelative(vec3.fromValues(0, 0, 10)));
    
    registerActionListener(viewer.element, 'z-=100', () => viewer.navigationState.pose.translateVoxelsRelative(vec3.fromValues(0, 0, -100)));

    registerActionListener(viewer.element, 'z+=100', () => viewer.navigationState.pose.translateVoxelsRelative(vec3.fromValues(0, 0, 100))); 
}
